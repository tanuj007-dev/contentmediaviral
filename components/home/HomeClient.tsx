"use client";

import { useEffect } from "react";

const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "+47", flag: "🇳🇴", name: "Norway" },
  { code: "+45", flag: "🇩🇰", name: "Denmark" },
  { code: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "+32", flag: "🇧🇪", name: "Belgium" },
  { code: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+30", flag: "🇬🇷", name: "Greece" },
  { code: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "+420", flag: "🇨🇿", name: "Czechia" },
  { code: "+90", flag: "🇹🇷", name: "Türkiye" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+852", flag: "🇭🇰", name: "Hong Kong" },
  { code: "+886", flag: "🇹🇼", name: "Taiwan" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+66", flag: "🇹🇭", name: "Thailand" },
  { code: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "+84", flag: "🇻🇳", name: "Vietnam" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "+51", flag: "🇵🇪", name: "Peru" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine" },
] as const;

export function HomeClient() {
  useEffect(() => {
    const codeSelect = document.getElementById("f-code");
    if (codeSelect instanceof HTMLSelectElement) {
      COUNTRY_CODES.forEach((c, i) => {
        const opt = document.createElement("option");
        opt.value = c.code;
        opt.textContent = `${c.flag} ${c.code}`;
        opt.title = c.name;
        if (i === 0) opt.selected = true;
        codeSelect.appendChild(opt);
      });
    }

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
        form.querySelector<HTMLSelectElement>('[name="country-code"]')
          ?.value ?? "+91";
      if (!name || !email || !phone) return;

      const company =
        form.querySelector<HTMLInputElement>('[name="company"]')?.value?.trim() ??
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
