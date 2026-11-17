import Image from "next/image";

export default function Jar({
  size = "hero",
  label,
  photo,
}: {
  size?: "hero" | "small" | "big";
  label?: string;
  photo?: string | null;
}) {
  if (photo) {
    return (
      <div className={`jar-photo ${size}`}>
        <Image
          src={photo}
          alt={label ? `${label} jar of Hakika cashew butter` : "Jar of Hakika cashew butter"}
          width={800}
          height={1000}
          sizes="(max-width: 760px) 70vw, 320px"
          priority={size === "hero"}
        />
      </div>
    );
  }
  return (
    <div
      className={`jar ${size === "hero" ? "" : size}`}
      {...(size === "hero"
        ? { role: "img", "aria-label": "Jar of Hakika cashew butter" }
        : { "aria-hidden": true })}
    >
      <div className="lid" />
      <div className="body">
        <div className="tag">
          <b>{label ?? "Hakika"}</b>
          {size === "hero" && <span>Cashew butter</span>}
        </div>
      </div>
    </div>
  );
}