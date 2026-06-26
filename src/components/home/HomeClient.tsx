import { useEffect } from "react";

export function HomeClient() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            revealIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((r) => revealIO.observe(r));

    const statIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = parseInt(el.dataset.target ?? "", 10);
          const suffix = el.dataset.suffix ?? "+";
          const duration = 1700;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            const current = Math.floor(eased * target);
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(animate);
            else el.textContent = target + suffix;
          };
          requestAnimationFrame(animate);
          statIO.unobserve(el);
        });
      },
      { threshold: 0.4 },
    );
    document.querySelectorAll(".stat-number[data-target]").forEach((s) => {
      statIO.observe(s);
    });

    const faqItems = document.querySelectorAll(".faq-item");
    const faqFns = new Map<Element, () => void>();
    faqItems.forEach((item) => {
      const fn = () => {
        const wasOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item").forEach((i) => {
          i.classList.remove("open");
        });
        if (!wasOpen) item.classList.add("open");
      };
      item.addEventListener("click", fn);
      faqFns.set(item, fn);
    });

    const form = document.getElementById("inquireForm");
    const submitBtn = form?.querySelector<HTMLButtonElement>(".form-submit");
    const onSubmit = async (e: Event) => {
      e.preventDefault();
      if (!(form instanceof HTMLFormElement)) return;
      const name = form.querySelector<HTMLInputElement>('[name="name"]')
        ?.value?.trim();
      const email = form.querySelector<HTMLInputElement>('[name="email"]')
        ?.value?.trim();
      const phone = form.querySelector<HTMLInputElement>('[name="phone"]')
        ?.value?.trim();
      const countryCode =
        form.querySelector<HTMLInputElement>('[name="country-code"]')
          ?.value ?? "+91";
      if (!name || !email || !phone) return;

      const company =
        form.querySelector<HTMLSelectElement>('[name="company"]')?.value?.trim() ??
        "";
      const budget =
        form.querySelector<HTMLSelectElement>('[name="budget"]')?.value ?? "";
      const message =
        form.querySelector<HTMLTextAreaElement>('[name="message"]')?.value?.trim() ??
        "";
      const services = Array.from(
        form.querySelectorAll<HTMLInputElement>('input[name="services"]:checked'),
      ).map((el) => el.value);

      submitBtn?.setAttribute("disabled", "true");
      const label = submitBtn?.querySelector("span");
      const prevLabel = label?.textContent;
      if (label) label.textContent = "Sending…";

      try {
        const res = await fetch("/api/inquiries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone,
            countryCode,
            company,
            budget,
            message,
            services,
          }),
        });
        if (!res.ok) throw new Error("submit failed");
        form.classList.add("submitted");
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
        if (label && prevLabel) label.textContent = prevLabel;
        submitBtn?.removeAttribute("disabled");
        alert("Could not send your inquiry. Please try again or email us directly.");
      }
    };
    form?.addEventListener("submit", onSubmit);

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealIO.disconnect();
      statIO.disconnect();
      faqFns.forEach((fn, el) => el.removeEventListener("click", fn));
      form?.removeEventListener("submit", onSubmit);
    };
  }, []);

  return null;
}
