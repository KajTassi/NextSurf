import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "Pic1",
    href: "https://uideck.com",
    image: "/images/brands/backsidebarrel.jpg",
  },
  {
    id: 2,
    name: "Pic2",
    href: "https://tailgrids.com",
    image: "/images/brands/blackandwhitesnap.jpg",
  },
  {
    id: 3,
    name: "Pic3",
    href: "https://lineicons.com",
    image: "/images/brands/sunsetsnap.jpg",
  },
  {
    id: 4,
    name: "Pic4",
    href: "https://graygrids.com",
    image: "/images/brands/blackandwhiteair.jpg",
  },
  {
    id: 5,
    name: "Pic5",
    href: "https://tailadmin.com",
    image: "/images/brands/bigair.jpg",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[300px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[300px] xl:mx-6 xl:max-w-[300px] 2xl:mx-8 2xl:max-w-[300px]">
      <a
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-72 w-full transition opacity-100 hover:grayscale-0"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
