import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Notes from "@/components/Notes";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <Header />
      <Form />
      <Video />
      <Notes />
      <Features />
      <About />
      <Footer />
    </>
  );
}
