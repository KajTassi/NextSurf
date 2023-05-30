import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "WSL, El Salvador Surf City recap",
    paragraph:
      "Want to know more about the last WSL event but don't have time to watch 20 hours of content? We got you covered.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["WSL"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Poly vs EPS",
    paragraph:
      "Not sure what to buy for your next board? Constuction plays a big part in how the board will ride, the cost, and what waves it will work in.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Reviews"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Wave measuring consistancy.",
    paragraph:
      "We have all heard the running joke of an overhead wave being 'one foot hawaiian', but what is the standard for wave measuring?",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Discussion"],
    publishDate: "2025",
  },
];
export default blogData;
