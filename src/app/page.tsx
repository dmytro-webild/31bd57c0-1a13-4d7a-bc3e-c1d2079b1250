"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Heart, Leaf, Radio, Sparkles, Star, Sun } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="StickerJoy"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardGallery
      background={{
        variant: "plain",
      }}
      title="Stickers for Every Story"
      description="Express your style with our collection of high-quality, durable, and whimsical stickers. Perfect for journals, laptops, and more."
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-watercolor-cactus-drawings_23-2148143534.jpg",
          imageAlt: "vibrant artistic sticker collection desk",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-vector/psychedelic-fast-food-retro-stickers-set_107791-17477.jpg",
          imageAlt: "cute aesthetic stickers scattered",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-studio_23-2151320742.jpg",
          imageAlt: "diverse character stickers arrangement",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/creative-florist-taking-selfie_1098-13538.jpg",
          imageAlt: "vibrant artistic sticker collection desk",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-vector/colorful-cute-sticker-collection-vector_53876-164296.jpg",
          imageAlt: "cute aesthetic stickers scattered",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Kawaii Cat",
          price: "$3.00",
          variant: "Glossy",
          imageSrc: "http://img.b2bpic.net/free-photo/cartoon-like-possum-illustration_23-2151289951.jpg",
        },
        {
          id: "2",
          name: "Wild Bloom",
          price: "$3.50",
          variant: "Matte",
          imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-flower-collection_23-2148911203.jpg",
        },
        {
          id: "3",
          name: "Retro Space",
          price: "$4.00",
          variant: "Holographic",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-colourful-backdrop-oil-waves-water-surface_23-2148290062.jpg",
        },
        {
          id: "4",
          name: "Stay Happy",
          price: "$2.50",
          variant: "Glossy",
          imageSrc: "http://img.b2bpic.net/free-photo/creative-inspirational-resource_23-2149144220.jpg",
        },
        {
          id: "5",
          name: "Abstract Joy",
          price: "$3.00",
          variant: "Matte",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-muted-colors-label-collection_23-2150072528.jpg",
        },
        {
          id: "6",
          name: "Snack Pun",
          price: "$3.00",
          variant: "Glossy",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-cat-wallpaper_23-2151836185.jpg",
        },
      ]}
      title="Shop Our Sticker Collections"
      description="Explore our curated range of unique designs handcrafted for you."
    />
  </div>

  <div id="collections" data-section="collections">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Nature Lovers",
          description: "Floral, garden, and plant-themed stickers.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-spring-badge-collection_23-2148095639.jpg",
            imageAlt: "floral botanical sticker pack",
          },
          items: [
            {
              icon: Leaf,
              text: "Eco-friendly materials",
            },
            {
              icon: Sun,
              text: "Outdoor durable",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-watercolor-cactus-drawings_23-2148143534.jpg",
          imageAlt: "floral botanical sticker pack",
        },
        {
          title: "Whimsical Characters",
          description: "Adorable illustrations that bring joy.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-vector/charity-stickers-collection-with-tomomi-cat_23-2150814866.jpg",
            imageAlt: "cute cat sticker die cut",
          },
          items: [
            {
              icon: Sparkles,
              text: "High quality finish",
            },
            {
              icon: Heart,
              text: "Hand-drawn designs",
            },
          ],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-vector/psychedelic-fast-food-retro-stickers-set_107791-17477.jpg",
          imageAlt: "floral botanical sticker pack",
        },
        {
          title: "Retro Vibes",
          description: "Nostalgic 80s and 90s aesthetic.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/hand-drawn-vintage-rocket-illustration_53876-165205.jpg",
            imageAlt: "vintage space travel sticker",
          },
          items: [
            {
              icon: Star,
              text: "Vibrant colors",
            },
            {
              icon: Radio,
              text: "Classic styles",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-studio_23-2151320742.jpg",
          imageAlt: "floral botanical sticker pack",
        },
      ]}
      title="Sticker Collections"
      description="Curated themes for your unique personality."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alice M.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-u-letter_1149-1838.jpg",
        },
        {
          id: "2",
          name: "Bob D.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-young-woman-surrounded-by-plants_23-2150522454.jpg",
        },
        {
          id: "3",
          name: "Charlie P.",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-beautiful-asian-woman-with-dark-hair-smiles-toothily-wears-pink-panama-green-sweatshirt-looks-gladfuly-poses-indoor-plasteered-sheet-paper_273609-53670.jpg",
        },
        {
          id: "4",
          name: "Diana K.",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-curly-hipster-guy-laughs-has-fun-with-friend-while-drawing-graffiti-smiles-broadly-has-braces-teeth-holds-aerosol-spray-bottles-wears-stylish-clothes-feels-chilly_273609-47402.jpg",
        },
        {
          id: "5",
          name: "Edward S.",
          imageSrc: "http://img.b2bpic.net/free-photo/cropped-shot-woman-brown-jumper-holds-tasty-traditional-christmas-beverage-filled-with-cinnamon-spruce_273609-33785.jpg",
        },
      ]}
      cardTitle="Loved by Sticker Enthusiasts"
      cardTag="Reviews"
      cardAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Our Sticker Journey",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/attractive-brunette-young-european-woman-artist-expressing-her-ideas-through-painting-feeling-happy-about-her-occupation-enjoying-process-creating-something-new-art-craft-creativity_273609-889.jpg",
          alt: "artist designing custom stickers",
        },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Are these stickers waterproof?",
          content: "Yes, our vinyl stickers are designed for durability.",
        },
        {
          id: "2",
          title: "How long do they last?",
          content: "Expect vibrant quality for up to 3 years indoors.",
        },
        {
          id: "3",
          title: "Can I custom request?",
          content: "We currently do not offer customs, but stay tuned!",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about our stickers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Let's Chat"
      title="Have a Question?"
      description="Send us a message and we'll get back to you shortly."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/table-full-school-material_23-2147650803.jpg"
      logoText="StickerJoy"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All Stickers",
              href: "#products",
            },
            {
              label: "New Arrivals",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
