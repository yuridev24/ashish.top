import {NewsLetter} from "./components/NewsLetter";
import { Posts } from "./components/Posts";

export default async function Blog() {
  return (
    <>
      <NewsLetter />
      <Posts />
    </>
  );
}
