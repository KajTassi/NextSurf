import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "WSL, El Salvador Surf City recap",
    paragraph:
      "Want to know more about the last WSL event but don't have time to watch 20 hours of content? We got you covered.",
    image: "/images/blog/surfcity.jpg",
    author: {
      name: "Kaj Tassi",
      image: "/images/blog/icons8-surf-50.png",
      designation: "Developer/Writer",
    },
    tags: ["WSL"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Poly vs EPS",
    paragraph:
      "Not sure what to buy for your next board? Constuction plays a big part in how the board will ride, the cost, and what waves it will work in.",
    image: "/images/blog/core.jpg",
    author: {
      name: "Kaj Tassi",
      image: "/images/blog/icons8-surf-50.png",
      designation: "Developer/Writer",
    },
    tags: ["Reviews"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Reading Swell Periods",
    paragraph:
      "Ever had a bad time when the swell period is 'good'? Learn more about what breaks like what swell periods.",
    image: "/images/blog/wazesize.jpg",
    author: {
      name: "Kaj Tassi",
      image: "/images/blog/icons8-surf-50.png",
      designation: "Developer/Writer",
    },
    tags: ["Discussion"],
    publishDate: "2025",
  },
];
export default blogData;
