import Image from "next/image";

// ─── Image Assets from Figma ───────────────────────────────────────────────
const imgLogo = "https://www.figma.com/api/mcp/asset/97d8af51-5bb8-4f9c-8fbf-05d5c052d94c";
const imgAccountIcon = "https://www.figma.com/api/mcp/asset/a0882add-8071-47b2-95dc-944136b17010";
const imgSearchIcon = "https://www.figma.com/api/mcp/asset/530cf1de-25dd-475b-8ab5-ccad1bef01f4";
const imgHeartIcon = "https://www.figma.com/api/mcp/asset/7e31ca65-c677-40f0-bd3e-365ca9221ed7";
const imgCartIcon = "https://www.figma.com/api/mcp/asset/6fc8da63-6e2d-41a8-91c3-1d5cf2fc84fd";
const imgHeroBg = "https://www.figma.com/api/mcp/asset/c6d69cc9-cadd-407e-9816-f252a9f5bd45";

// Browse The Range images
const imgDining = "https://www.figma.com/api/mcp/asset/c3ab6b9b-92d8-4bdf-a167-e91b99fdc6f0";
const imgLiving = "https://www.figma.com/api/mcp/asset/8ffcc703-4c9d-4cb5-9828-177e4f222f4a";
const imgBedroom = "https://www.figma.com/api/mcp/asset/9dd3a550-9c9c-46dd-9ed8-e23e9e7e8437";

// Product images
const imgProduct1 = "https://www.figma.com/api/mcp/asset/bea0982d-93ea-4d78-8bdf-cbe5c79c18ca";
const imgProduct2 = "https://www.figma.com/api/mcp/asset/719eb0ae-1098-4017-9810-72e4df849b3f";
const imgProduct3 = "https://www.figma.com/api/mcp/asset/42014f62-f619-44a0-bf03-5ba92fca943f";
const imgProduct4 = "https://www.figma.com/api/mcp/asset/d481a6d7-fc72-4e54-8f62-a129f5f6ed8f";
const imgProduct5 = "https://www.figma.com/api/mcp/asset/e2c8a8ac-b066-4812-ad9b-b263fc047adc";
const imgProduct6 = "https://www.figma.com/api/mcp/asset/23c85d75-660a-4c51-94a0-b0a17bbafa4e";
const imgProduct7 = "https://www.figma.com/api/mcp/asset/9253946d-9c8c-4a08-930f-fba8eb577f9a";
const imgProduct8 = "https://www.figma.com/api/mcp/asset/2be833a1-2fc6-4baa-a4b0-4a9295280584";

// Inspiration images
const imgInspiration1 = "https://www.figma.com/api/mcp/asset/3653c5d3-03cd-4802-938e-8da62e7fc3da";
const imgInspiration2 = "https://www.figma.com/api/mcp/asset/8ab7bbe7-fb7b-4ba1-927b-695825428863";
const imgArrowRight = "https://www.figma.com/api/mcp/asset/9c8a9b73-c026-452e-a173-f113260b7556";
const imgIndicator = "https://www.figma.com/api/mcp/asset/770379ff-b2c5-48e9-8568-849b60cf99fa";

// Share/Instagram section images (Rectangle order from Figma)
const imgShare1 = "https://www.figma.com/api/mcp/asset/e62ed72e-5192-4542-8159-37d8339ff2fc"; // Rectangle36
const imgShare2 = "https://www.figma.com/api/mcp/asset/b8af7d93-b180-418a-9059-3408af7ae854"; // Rectangle37
const imgShare3 = "https://www.figma.com/api/mcp/asset/644fb27f-5042-40c8-8530-8406943d4e2e"; // Rectangle38
const imgShare4 = "https://www.figma.com/api/mcp/asset/ad8ba2c7-767f-4fd4-88f3-d697712b2216"; // Rectangle39
const imgShare5 = "https://www.figma.com/api/mcp/asset/e938b198-cf25-4d35-93b5-78991fa9f6d7"; // Rectangle40
const imgShare6 = "https://www.figma.com/api/mcp/asset/39e038ae-8576-4260-b769-40eaf68c0d35"; // Rectangle41
const imgShare7 = "https://www.figma.com/api/mcp/asset/c1d9a702-8aa8-4078-b3be-3c340fc36473"; // Rectangle43
const imgShare8 = "https://www.figma.com/api/mcp/asset/7f3224db-95d0-449f-a168-cd099227c513"; // Rectangle44
const imgShare9 = "https://www.figma.com/api/mcp/asset/82a5b1ad-fe0b-42f9-b295-72a3a48f7fd1"; // Rectangle45

// ─── Types ─────────────────────────────────────────────────────────────────
interface Product {
  id: number;
  name: string;
  type: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: { type: "discount" | "new"; label: string };
}

interface ProductCardProps {
  product: Product;
}

// ─── Data (module-level — never recreated on render) ───────────────────────
const products: Product[] = [
  { id: 1, name: "Syltherine", type: "Stylish cafe chair", price: "Rp 2.500.000", originalPrice: "Rp 3.500.000", image: imgProduct1, badge: { type: "discount", label: "-30%" } },
  { id: 2, name: "Leviosa", type: "Stylish cafe chair", price: "Rp 2.500.000", image: imgProduct2 },
  { id: 3, name: "Lolito", type: "Luxury big sofa", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000", image: imgProduct3, badge: { type: "discount", label: "-50%" } },
  { id: 4, name: "Respira", type: "Outdoor bar table and stool", price: "Rp 500.000", image: imgProduct4, badge: { type: "new", label: "New" } },
  { id: 5, name: "Grifo", type: "Night lamp", price: "Rp 1.500.000", image: imgProduct5 },
  { id: 6, name: "Muggo", type: "Small mug", price: "Rp 150.000", image: imgProduct6, badge: { type: "new", label: "New" } },
  { id: 7, name: "Pingky", type: "Cute bed set", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000", image: imgProduct7, badge: { type: "discount", label: "-50%" } },
  { id: 8, name: "Potty", type: "Minimalist flower pot", price: "Rp 500.000", image: imgProduct8, badge: { type: "new", label: "New" } },
];

const rooms = [
  { label: "Dining", image: imgDining },
  { label: "Living", image: imgLiving },
  { label: "Bedroom", image: imgBedroom },
];

const navLinks = ["Home", "Shop", "About", "Contact"];

const headerIcons = [
  { src: imgAccountIcon, alt: "Account" },
  { src: imgSearchIcon, alt: "Search" },
  { src: imgHeartIcon, alt: "Wishlist" },
  { src: imgCartIcon, alt: "Cart" },
];

const badgeBgMap: Record<"discount" | "new", string> = {
  discount: "#E97171",
  new: "#2EC1AC",
};

const productActions = [
  {
    label: "Share",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
        <path d="M2.667 10.667v2.666h10.666v-2.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 2v8M5.333 4.667L8 2l2.667 2.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Compare",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
        <path d="M2 5.333h12M10.667 2.667L13.333 5.333l-2.666 2.667M14 10.667H2M5.333 8L2.667 10.667 5.333 13.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Like",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
        <path d="M8 13.333S1.333 9.667 1.333 5.333a3.333 3.333 0 016.667-1.2 3.333 3.333 0 016.667 1.2c0 4.334-6.667 8-6.667 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// ─── Components ────────────────────────────────────────────────────────────

function Header() {
  return (
    <header
      className="w-full bg-white h-[100px] flex items-center pl-[54px] pr-[100px] justify-between sticky top-0 z-50"
      style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-[5px]">
        <div className="relative w-[50px] h-[32px]">
          <Image src={imgLogo} alt="Furniro logo" fill sizes="50px" style={{ objectFit: "contain" }} unoptimized />
        </div>
        <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: "34px", color: "#000", lineHeight: "normal" }}>
          Furniro
        </span>
      </div>

      {/* Nav */}
      <nav>
        <ul className="flex items-center gap-[75px]">
          {navLinks.map((item) => (
            <li key={item}>
              <a href="#" style={{ fontWeight: 500, fontSize: "16px", color: "#000" }} className="hover:text-[#B88E2F] transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-[45px]">
        {headerIcons.map(({ src, alt }) => (
          <button key={alt} type="button" aria-label={alt} className="relative w-[28px] h-[28px] cursor-pointer hover:opacity-70 transition-opacity">
            <Image src={src} alt="" fill sizes="28px" style={{ objectFit: "contain" }} unoptimized />
          </button>
        ))}
      </div>
    </header>
  );
}

function HeroBanner() {
  return (
    <section className="relative w-full h-[717px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imgHeroBg}
          alt="Interior background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          unoptimized
          priority
        />
      </div>

      {/* Content Card */}
      <div
        className="absolute"
        style={{
          right: "58px",
          top: "157px",
          width: "643px",
          backgroundColor: "#FFF3E3",
          borderRadius: "10px",
          padding: "62px 40px 37px",
        }}
      >
        <p style={{ fontWeight: 600, fontSize: "16px", color: "#333333", letterSpacing: "3px", marginBottom: "8px" }}>
          New Arrival
        </p>
        <h1 style={{ fontWeight: 700, fontSize: "52px", lineHeight: "65px", color: "#B88E2F", marginBottom: "17px" }}>
          Discover Our<br />New Collection
        </h1>
        <p style={{ fontWeight: 500, fontSize: "18px", lineHeight: "24px", color: "#333333", marginBottom: "48px", maxWidth: "420px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button
          type="button"
          style={{
            backgroundColor: "#B88E2F",
            color: "#fff",
            fontWeight: 700,
            fontSize: "16px",
            textTransform: "uppercase",
            padding: "25px 72px",
            border: "none",
            cursor: "pointer",
          }}
        >
          BUY Now
        </button>
      </div>
    </section>
  );
}

function BrowseRange() {
  return (
    <section style={{ padding: "56px 131px" }}>
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "43px" }}>
        <h2 style={{ fontWeight: 700, fontSize: "32px", color: "#333333" }}>
          Browse The Range
        </h2>
        <p style={{ fontWeight: 400, fontSize: "20px", color: "#666666", marginTop: "8px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Cards */}
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {rooms.map((room) => (
          <div key={room.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
            <div style={{ position: "relative", width: "381px", height: "480px", overflow: "hidden", borderRadius: "8px" }}>
              <Image src={room.image} alt={room.label} fill sizes="381px" style={{ objectFit: "cover" }} unoptimized />
            </div>
            <p style={{ fontWeight: 600, fontSize: "24px", color: "#333333", marginTop: "30px" }}>
              {room.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }: ProductCardProps) {
  const badgeBg = product.badge ? badgeBgMap[product.badge.type] : undefined;

  return (
    <div style={{ position: "relative", width: "285px", backgroundColor: "#F4F5F7", cursor: "pointer" }} className="group overflow-hidden">
      {/* Image */}
      <div style={{ position: "relative", width: "285px", height: "301px", overflow: "hidden" }}>
        <Image src={product.image} alt={product.name} fill sizes="285px" style={{ objectFit: "cover" }} unoptimized />

        {/* Badge */}
        {product.badge && (
          <div
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              backgroundColor: badgeBg,
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            <span style={{ fontWeight: 500, fontSize: "14px", color: "#fff" }}>
              {product.badge.label}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-[24px]"
          style={{ backgroundColor: "rgba(58,58,58,0.72)" }}
        >
          <button
            type="button"
            style={{
              backgroundColor: "#fff",
              color: "#B88E2F",
              fontWeight: 600,
              fontSize: "16px",
              width: "202px",
              height: "48px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Add to cart
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {productActions.map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "14px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "16px 16px 30px" }}>
        <p style={{ fontWeight: 600, fontSize: "24px", lineHeight: 1.2, color: "#3A3A3A" }}>
          {product.name}
        </p>
        <p style={{ fontWeight: 500, fontSize: "16px", lineHeight: 1.5, color: "#898989", marginTop: "4px" }}>
          {product.type}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "8px" }}>
          <span style={{ fontWeight: 600, fontSize: "20px", color: "#3A3A3A" }}>
            {product.price}
          </span>
          {product.originalPrice && (
            <span style={{ fontWeight: 400, fontSize: "16px", color: "#B0B0B0", textDecoration: "line-through" }}>
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function OurProducts() {
  return (
    <section style={{ padding: "56px 102px" }}>
      <h2
        style={{
          fontWeight: 700,
          fontSize: "40px",
          color: "#3A3A3A",
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        Our Products
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center", marginBottom: "56px" }}>
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      {/* Show More */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="button"
          style={{
            border: "1px solid #B88E2F",
            color: "#B88E2F",
            fontWeight: 600,
            fontSize: "16px",
            width: "245px",
            height: "48px",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
        >
          Show More
        </button>
      </div>
    </section>
  );
}

function Inspirations() {
  return (
    <section style={{ backgroundColor: "#FCF8F3", padding: "56px 0" }}>
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 100px",
          display: "flex",
          gap: "32px",
          alignItems: "flex-start",
        }}
      >
        {/* Left: Title */}
        <div style={{ width: "350px", flexShrink: 0, paddingTop: "56px" }}>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: 1.2,
              color: "#3A3A3A",
              marginBottom: "17px",
            }}
          >
            50+ Beautiful rooms<br />inspiration
          </h2>
          <p
            style={{
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: 1.5,
              color: "#616161",
              marginBottom: "48px",
            }}
          >
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <button
            type="button"
            style={{
              backgroundColor: "#B88E2F",
              color: "#fff",
              fontWeight: 600,
              fontSize: "16px",
              padding: "12px 36px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Explore More
          </button>
        </div>

        {/* Right: Images */}
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", flex: 1 }}>
          {/* Main large image */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div style={{ position: "relative", width: "404px", height: "582px", overflow: "hidden" }}>
              <Image src={imgInspiration1} alt="Bedroom inspiration" fill sizes="404px" style={{ objectFit: "cover" }} unoptimized />
            </div>
            {/* Content overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "72px",
                left: "24px",
                backgroundColor: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(1.5px)",
                width: "217px",
                height: "130px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 32px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <span style={{ fontWeight: 500, fontSize: "16px", color: "#616161" }}>01</span>
                <div style={{ width: "27px", height: "1px", backgroundColor: "#616161" }} />
                <span style={{ fontWeight: 500, fontSize: "16px", color: "#616161" }}>Bed Room</span>
              </div>
              <p style={{ fontWeight: 600, fontSize: "28px", color: "#3A3A3A" }}>
                Inner Peace
              </p>
            </div>
            {/* Arrow CTA — left edge aligns with content overlay's right edge (24px + 217px = 241px) */}
            <button
              type="button"
              aria-label="Next inspiration"
              style={{
                position: "absolute",
                bottom: "72px",
                left: "241px",
                width: "48px",
                height: "48px",
                backgroundColor: "#B88E2F",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
            >
              <Image src={imgArrowRight} alt="" width={24} height={24} unoptimized />
            </button>
          </div>

          {/* Side images stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px", paddingTop: "32px" }}>
            <div style={{ position: "relative", width: "372px", height: "486px", overflow: "hidden" }}>
              <Image src={imgInspiration2} alt="Room inspiration 2" fill sizes="372px" style={{ objectFit: "cover" }} unoptimized />
            </div>
            {/* Slide indicator */}
            <div style={{ position: "relative", width: "120px", height: "27px" }}>
              <Image src={imgIndicator} alt="Slide indicator" fill sizes="120px" style={{ objectFit: "contain" }} unoptimized />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShareSection() {
  return (
    <section style={{ overflow: "hidden" }}>
      {/* Title */}
      <div style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "32px" }}>
        <p style={{ fontWeight: 600, fontSize: "20px", color: "#616161" }}>
          Share your setup with
        </p>
        <h2 style={{ fontWeight: 700, fontSize: "40px", color: "#3A3A3A" }}>
          #FuniroFurniture
        </h2>
      </div>

      {/* Mosaic grid — absolute positions from Figma, container shifted left by 196px */}
      <div style={{ position: "relative", height: "721px", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "-196px", top: 0, width: "1799px", height: "721px" }}>
          {/* Rectangle36: x=0, y=0, w=274, h=382 */}
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "274px", height: "382px", overflow: "hidden" }}>
            <Image src={imgShare1} alt="" fill sizes="274px" style={{ objectFit: "cover" }} unoptimized />
          </div>
          {/* Rectangle37: x=0, y=398, w=381, h=323 */}
          <div style={{ position: "absolute", left: "0px", top: "398px", width: "381px", height: "323px", overflow: "hidden" }}>
            <Image src={imgShare2} alt="" fill sizes="381px" style={{ objectFit: "cover" }} unoptimized />
          </div>
          {/* Rectangle38: x=290 (94-(-196)), y=70, w=451, h=312 */}
          <div style={{ position: "absolute", left: "290px", top: "70px", width: "451px", height: "312px", overflow: "hidden" }}>
            <Image src={imgShare3} alt="" fill sizes="451px" style={{ objectFit: "cover" }} unoptimized />
          </div>
          {/* Rectangle39: x=397 (201-(-196)), y=398, w=344, h=242 */}
          <div style={{ position: "absolute", left: "397px", top: "398px", width: "344px", height: "242px", overflow: "hidden" }}>
            <Image src={imgShare4} alt="" fill sizes="344px" style={{ objectFit: "cover" }} unoptimized />
          </div>
          {/* Rectangle40: x=757 (561-(-196)), y=156, w=295, h=392 */}
          <div style={{ position: "absolute", left: "757px", top: "156px", width: "295px", height: "392px", overflow: "hidden" }}>
            <Image src={imgShare5} alt="" fill sizes="295px" style={{ objectFit: "cover" }} unoptimized />
          </div>
          {/* Rectangle43: x=1068 (872-(-196)), y=99, w=290, h=348 */}
          <div style={{ position: "absolute", left: "1068px", top: "99px", width: "290px", height: "348px", overflow: "hidden" }}>
            <Image src={imgShare7} alt="" fill sizes="290px" style={{ objectFit: "cover" }} unoptimized />
          </div>
          {/* Rectangle41: x=1068, y=463, w=178, h=242 */}
          <div style={{ position: "absolute", left: "1068px", top: "463px", width: "178px", height: "242px", overflow: "hidden" }}>
            <Image src={imgShare6} alt="" fill sizes="178px" style={{ objectFit: "cover" }} unoptimized />
          </div>
          {/* Rectangle44: x=1262 (1066-(-196)), y=463, w=258, h=196 */}
          <div style={{ position: "absolute", left: "1262px", top: "463px", width: "258px", height: "196px", overflow: "hidden" }}>
            <Image src={imgShare8} alt="" fill sizes="258px" style={{ objectFit: "cover" }} unoptimized />
          </div>
          {/* Rectangle45: x=1374 (1178-(-196)), y=14, w=425, h=433 */}
          <div style={{ position: "absolute", left: "1374px", top: "14px", width: "425px", height: "433px", overflow: "hidden" }}>
            <Image src={imgShare9} alt="" fill sizes="425px" style={{ objectFit: "cover" }} unoptimized />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(0,0,0,0.17)", padding: "48px 100px 38px" }}>
      <div style={{ display: "flex", gap: "100px", marginBottom: "48px" }}>
        {/* Brand */}
        <div style={{ width: "285px" }}>
          <p style={{ fontWeight: 700, fontSize: "24px", color: "#000", marginBottom: "50px" }}>
            Funiro.
          </p>
          <p style={{ fontWeight: 400, fontSize: "16px", color: "#9F9F9F", lineHeight: 1.5 }}>
            400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <p style={{ fontWeight: 500, fontSize: "16px", color: "#9F9F9F", marginBottom: "30px" }}>
            Links
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "20px", listStyle: "none", padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" style={{ fontWeight: 500, fontSize: "16px", color: "#000", textDecoration: "none" }}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <p style={{ fontWeight: 500, fontSize: "16px", color: "#9F9F9F", marginBottom: "30px" }}>
            Help
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "20px", listStyle: "none", padding: 0 }}>
            {["Payment Options", "Returns", "Privacy Policies"].map((item) => (
              <li key={item}>
                <a href="#" style={{ fontWeight: 500, fontSize: "16px", color: "#000", textDecoration: "none" }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div style={{ flex: 1 }}>
          <p style={{ fontWeight: 500, fontSize: "16px", color: "#9F9F9F", marginBottom: "30px" }}>
            Newsletter
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontWeight: 400, fontSize: "14px", color: "#9F9F9F" }}>
                Enter Your Email Address
              </span>
              <div style={{ width: "200px", borderBottom: "1px solid #000" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontWeight: 500, fontSize: "14px", color: "#000", cursor: "pointer" }}>
                SUBSCRIBE
              </span>
              <div style={{ borderBottom: "1px solid #000" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider + copyright */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.17)", paddingTop: "36px" }}>
        <p style={{ fontWeight: 400, fontSize: "16px", color: "#000" }}>
          2023 furino. All rights reverved
        </p>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Header />
      <HeroBanner />
      <BrowseRange />
      <OurProducts />
      <Inspirations />
      <ShareSection />
      <Footer />
    </main>
  );
}
