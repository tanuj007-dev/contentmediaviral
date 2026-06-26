import { Link } from "@/components/RouterLink";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
const ARROW_SCRIBBLE_SRC = "/Untitled design (52).png";

const BAR_HEIGHTS = [35, 55, 70, 85, 65, 95];
const STEPS = ["Strategy", "Scripting", "Editing", "Distribution", "Growth"];

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(mouseYSpring, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] px-5 py-28 text-white"
    >
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Aurora */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(124,92,255,0.18),transparent_65%)]"
      />

      {/* Blur orbs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-16 left-16 h-80 w-80 rounded-full bg-purple-800/15 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute right-16 bottom-16 h-96 w-96 rounded-full bg-blue-900/10 blur-[120px]"
      />

      {/* Hexagon accents */}
      <Hexagon className="absolute bottom-[18%] left-[6%] h-16 w-16 opacity-[0.07]" />
      <Hexagon className="absolute top-[22%] right-[8%] h-10 w-10 opacity-[0.05]" />
      <Hexagon className="absolute bottom-[30%] right-[22%] h-20 w-20 opacity-[0.06]" />

      {/* Sparkle top center */}
      <Sparkle className="absolute top-[12%] left-1/2 h-5 w-5 -translate-x-1/2 text-white/40" />

      {/* Hand-drawn scribble arrows */}
      <HandDrawnArrows />

      {/* ── Floating cards (absolute, around center) ── */}
      <div className="pointer-events-none absolute inset-0 z-[8] hidden lg:block">
        {/* Top-left - Trusted By */}
        <FloatingCard
          positionClassName="absolute top-[20%] left-[7%] rotate-[-16deg]"
          mouseX={rotateX}
          mouseY={rotateY}
        >
          <div className="flex min-w-[200px] items-start justify-between gap-4">
            <div className="flex flex-col">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 shrink-0 rounded-full bg-[#c858ff]" />
                <p className="text-[11px] leading-none font-semibold tracking-wide text-[#c858ff] uppercase">
                  Trusted By
                </p>
              </div>
              <p className="text-[36px] leading-none font-extrabold tracking-tight text-white">
                100+
              </p>
              <p className="mt-1.5 text-sm text-[#d1d1d1]">Founders Served</p>
            </div>
            <FiHeart className="mt-1 h-10 w-10 shrink-0 fill-purple-500/20 text-purple-500" />
          </div>
        </FloatingCard>

        {/* Bottom-left - Bar chart */}
        <FloatingCard
          positionClassName="absolute bottom-[16%] left-[9%] rotate-[-8deg]"
          mouseX={rotateX}
          mouseY={rotateY}
        >
          <div className="min-w-[180px]">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 shrink-0 rounded-full bg-[#c858ff]" />
              <p className="text-[11px] font-semibold tracking-wide text-[#c858ff] uppercase">
                Monthly Content Output
              </p>
            </div>
            <div className="flex h-20 items-end gap-2">
              {BAR_HEIGHTS.map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${h * 0.75}%`, `${h}%`] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    repeatType: "reverse",
                    delay: i * 0.1,
                  }}
                  className="w-3.5 rounded-t-sm bg-purple-500"
                />
              ))}
            </div>
          </div>
        </FloatingCard>

        {/* Top-right - Social pill */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
          className="pointer-events-auto absolute top-[16%] right-[9%] rotate-[-15deg]"
        >
          <div className="flex items-center gap-5 rounded-full border border-white/[0.08] bg-black/50 px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <FaFacebookF className="text-lg text-purple-500" />
            <FaYoutube className="text-lg text-purple-500" />
            <FaTiktok className="text-lg text-purple-500" />
            <FaInstagram className="text-lg text-purple-500" />
          </div>
        </motion.div>

        {/* Bottom-right - Content Engine */}
        <FloatingCard
          positionClassName="absolute right-[7%] bottom-[18%]"
          mouseX={rotateX}
          mouseY={rotateY}
        >
          <div className="min-w-[150px]">
            <div className="mb-4 flex items-center justify-between gap-6 border-b border-white/[0.06] pb-3">
              <span className="text-[10px] font-bold text-white">Content Engine</span>
              <span className="text-[9px] text-gray-500">Full Service</span>
            </div>
            <div className="space-y-2.5">
              {STEPS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-8 text-[8px]"
                >
                  <span className="text-white">Step {i + 1}</span>
                  <span className="font-mono font-medium text-purple-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FloatingCard>
      </div>

      {/* ── Center content ── */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 text-4xl leading-[1.08] font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        >
          
          <br />
          Build a{" "}
          <motion.span
            className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% center", "200% center"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            system
          </motion.span>{" "}
          that makes you impossible to ignore.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg lg:text-xl"
        >
          We turn one recording session into a full month of content across
          LinkedIn, Instagram & YouTube. Strategy, scripting, editing, posting.
          We do all of it.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-10 text-sm text-gray-500 md:text-base"
        >
          You give{" "}
          <span className="font-semibold text-purple-400">~2 hours a week.</span>{" "}
          We handle the rest.
        </motion.p>

        <div className="mx-auto flex w-full max-w-xs flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="#inquire"
              className="block w-full rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-10 py-4 text-center font-semibold text-white shadow-[0_0_30px_rgba(147,51,234,0.35)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(147,51,234,0.55)] sm:inline-block sm:w-auto"
            >
              Book a Free 1:1 Call
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/portfolio"
              className="block w-full rounded-full border border-white/10 bg-white/5 px-10 py-4 text-center font-semibold text-white backdrop-blur-md transition hover:border-purple-500/50 sm:inline-block sm:w-auto"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

function FloatingCard({
  children,
  positionClassName,
  mouseX,
  mouseY,
}: {
  children: React.ReactNode;
  positionClassName: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  return (
    <motion.div
      className={`pointer-events-auto ${positionClassName}`}
      animate={{ y: [0, -14, 0] }}
      transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      <motion.div
        style={{
          rotateX: mouseX,
          rotateY: mouseY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        transition={{ rotateX: { duration: 0.2 }, rotateY: { duration: 0.2 } }}
        className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black/55 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/[0.04] before:to-transparent"
      >
        <div className="relative z-10">{children}</div>
      </motion.div>
    </motion.div>
  );
}

const SCRIBBLE_ARROWS = [
  {
    className: "top-[26%] left-[16%] w-[150px] -rotate-[18deg]",
    duration: 4.5,
  },
  {
    className: "bottom-[30%] left-[18%] w-[130px] rotate-[22deg] scale-x-[-1]",
    duration: 5.2,
  },
  {
    className: "top-[20%] right-[18%] w-[140px] rotate-[158deg]",
    duration: 4.8,
  },
  {
    className: "bottom-[26%] right-[16%] w-[135px] -rotate-[162deg]",
    duration: 5.5,
  },
] as const;

function HandDrawnArrows() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[4] hidden lg:block"
    >
      {SCRIBBLE_ARROWS.map((arrow, i) => (
        <motion.img
          key={arrow.className}
          src={ARROW_SCRIBBLE_SRC}
          alt=""
          animate={{ y: [0, -7, 0], opacity: [0.45, 0.65, 0.45] }}
          transition={{
            y: {
              repeat: Infinity,
              duration: arrow.duration,
              ease: "easeInOut",
              delay: i * 0.4,
            },
            opacity: {
              repeat: Infinity,
              duration: arrow.duration,
              ease: "easeInOut",
              delay: i * 0.4,
            },
          }}
          className={`absolute mix-blend-screen ${arrow.className}`}
        />
      ))}
    </div>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
    </svg>
  );
}

function Hexagon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className={className}
      fill="none"
    >
      <polygon
        points="50,2 98,27 98,73 50,98 2,73 2,27"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}
