import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Head>
        <title>Stream TV and Movies Live and Online | Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setShowModal={setShowModal} />

      <section className="grid md:grid-cols-8 gap-5 md:gap-10 items-center py-[30px] px-10 bg-linear-gradient text-center md:text-left">
        <div className="relative w-64 h-20 md:col-span-2 mx-auto md:mx-0">
          <Image src="http://tny.im/pfX" layout="fill" objectFit="contain" />
        </div>
        <div className="md:col-span-4">
          <h4>BUNDLE WITH ANY HULU PLAN & SAVE</h4>
          <h3>Get Hulu, Disney+, and ESPN+.</h3>
          <a href="#" className="sub-link">
            Details
          </a>
        </div>
        <div className="md:col-span-2 md:justify-self-end md:self-end">
          <a
            href="#"
            className="button !bg-transparent !text-white border-2 whitespace-nowrap hover:border-[#ccc]"
          >
            Get Bundle
          </a>
          <a href="#" className="sub-link text-center">
            Terms apply
          </a>
        </div>
      </section>

      <section className="flex flex-col items-center text-center py-[90px] px-10 justify-center">
        <h4>Included in all plans</h4>
        <div className="heading">All The TV You Love</div>
        <div className="sub-heading">
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, Hulu Originals, kids shows, and more.
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-5">
          <Cover
            subtitle="Past & Current Seasons"
            category="TV Shows"
            image="bg-cover-1"
          />
          <Cover
            subtitle="New & Classics"
            category="Movies"
            image="bg-cover-2"
          />
          <Cover
            subtitle="Groundbreaking"
            category="Hulu Originals"
            image="bg-cover-3"
          />
          <Cover subtitle="Add-On" category="Premiums" image="bg-cover-4" />
        </div>
      </section>

      <section className="bg-[#151516] p-10">
        <div className="border-4 border-[#1CE783] rounded-2xl py-[30px] px-2.5 md:p-[100px] flex flex-col items-center justify-center text-center">
          <h4>Hulu + Live TV</h4>
          <div className="heading">Live TV Makes It Better</div>
          <div className="sub-heading">
            Make the switch from cable. Get 75+ top channels with your favorite
            live sports, news, and events - plus the entire Hulu streaming
            library.
          </div>
          <div className="legal-text">
            Live TV plan required. Regional restrictions, blackouts and
            additional terms apply. See details
          </div>
          <a href="#" className="uppercase text-lg mt-5 underline">
            View Channels in Your Area
          </a>
        </div>
      </section>

      <section className="bg-live-sports-small md:bg-live-sports bg-no-repeat bg-center bg-cover h-[800px] relative">
        <div className="absolute top-[30px] md:top-40 left-[30px] md:left-[100px] max-w-[550px] mt-[60px] md:mt-0">
          <div className="heading">Live Sports</div>
          <div className="sub-heading">
            Catch your games at home or on the go. Stream live games from major
            college and pro leagues including the NCAA®, NBA, NHL, NFL, and
            more.
          </div>
          <div className="w-[300px] mt-10 flex items-center justify-between">
            <div className="bg-network-logo bg-no-repeat bg-center bg-cover h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src="http://tny.im/pg9"
                width={40}
                height={40}
                objectFit="contain"
              />
            </div>
            <div className="bg-network-logo bg-no-repeat bg-center bg-cover h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src="http://tny.im/pga"
                width={40}
                height={40}
                objectFit="contain"
              />
            </div>
            <div className="bg-network-logo bg-no-repeat bg-center bg-cover h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src="http://tny.im/pgb"
                width={40}
                height={40}
                objectFit="contain"
              />
            </div>
            <div className="bg-network-logo bg-no-repeat bg-center bg-cover h-[60px] w-[60px] flex items-center justify-center">
              <Image
                src="http://tny.im/pgc"
                width={40}
                height={40}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="legal-text">
            Live TV plan required. Regional restrictions, blackouts and
            additional terms apply. See details
          </div>
        </div>
      </section>

      <Footer />

      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}
