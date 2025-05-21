import { useEffect, useRef } from "react";
import Header from "./Header";

const Summary = () => {
  // Refs for animation elements
  const sectionRefs = {
    hero: useRef(null),
    plot: useRef(null),
    themes: useRef(null),
    historical: useRef(null),
  };

  // Animation on scroll effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("opacity-100");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all section refs
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup
    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 font-serif">
      <Header />

      {/* Hero Section */}
      <header
        ref={sectionRefs.hero}
        className="pt-16 pb-12 px-6 md:px-12 lg:px-24 opacity-0 transition-opacity duration-1000 ease-in-out bg-[url('https://i.imgur.com/t6h5OFq.png')] bg-cover bg-center"
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            The Great Gatsby
          </h1>
          <h2 className="text-xl md:text-2xl text-white italic mb-8">
            Plot, Themes, and Historical Context
          </h2>
          <div className="w-30 h-1 bg-white mb-8 animate-pulse"></div>
          <p className="text-lg md:text-xl text-white max-w-3xl">
            F. Scott Fitzgerald's masterpiece of the Jazz Age, exploring wealth,
            love, and the American Dream through the enigmatic Jay Gatsby and
            his pursuit of Daisy Buchanan.
          </p>
        </div>
      </header>

      {/* Plot Summary Section */}
      <section
        ref={sectionRefs.plot}
        className="bg-white py-12 px-6 md:px-12 lg:px-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-slate-500 flex items-center justify-center text-white font-bold mr-4 transform hover:rotate-12 transition-transform duration-300">
              1
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Plot Summary
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Nick Carraway, a young World War I veteran from the Midwest, moves
              to Long Island in 1922 to work in New York finance. He rents a
              modest home in the village of West Egg, among the lavish estates
              of newly rich neighbors. Across the bay in East Egg live his
              cousin Daisy and her husband Tom Buchanan, representatives of old,
              inherited wealth. Early one summer evening, Nick dines with the
              Buchanans and meets Daisy's friend Jordan Baker. Jordan confides
              that Tom keeps a mistress living in the bleak "valley of ashes"
              between West Egg and the city. Returning home that night, Nick
              glimpses the mysterious Jay Gatsby standing alone on his lawn,
              reaching out toward a green light across the water on Daisy's
              dock. This haunting image hints at Gatsby's secret longing for
              Daisy.
            </p>
            <p>
              As the summer progresses, Nick grows accustomed to Gatsby's world
              of opulent parties and hidden tension. He finally meets Gatsby at
              one of the elaborate Saturday-night gatherings when the host
              introduces himself to Nick. Gatsby impresses Nick with tales of
              heroism and privilege, though Nick remains skeptical. Eventually,
              Jordan reveals Gatsby's true motive: he and Daisy fell in love
              five years earlier in Louisville before the war, but he went
              abroad and she married Tom in his absence. Gatsby has since bought
              his West Egg mansion directly across the bay from Daisy, hoping to
              win her back. Nick agrees to arrange a private reunion: Daisy
              visits Nick's house, and Gatsby and Daisy begin a furtive affair
              in the heat of the summer.
            </p>
            <p>
              Conflict comes to a head on a sweltering July day. Gatsby, Daisy,
              Tom, Nick, and Jordan drive into Manhattan, and in a suite at the
              Plaza Hotel Gatsby demands that Daisy admit she never loved Tom.
              Daisy hesitates and cannot fully deny she once loved Tom, and Tom
              ruthlessly exposes Gatsby's criminal background as a bootlegger.
              Humiliated and defeated, Gatsby continues to profess his devotion
              but Daisy, shaken, clings to Tom. On the drive home, Daisy – who
              is behind the wheel of Gatsby's yellow car – suddenly strikes and
              kills Myrtle Wilson, Tom's mistress, who has run into the road.
              Gatsby vows to take the blame for the accident to protect Daisy.
              But Tom tells Myrtle's husband, George, that Gatsby owns the car.
              A grief-stricken George Wilson finds Gatsby at his estate and
              shoots him dead by the swimming pool, then turns the gun on
              himself. In the aftermath Nick feels appalled by the Buchanans'
              callous indifference. He arranges Gatsby's sparsely attended
              funeral (only Gatsby's father and a few others come), then leaves
              New York, disillusioned by the emptiness he has witnessed.
            </p>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section
        ref={sectionRefs.themes}
        className="py-12 px-6 md:px-12 lg:px-24 text-white opacity-0 transition-opacity duration-1000 ease-in-out bg-[url('https://i.imgur.com/diM34fT.png')] bg-cover bg-center"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-gray-900 font-bold mr-4 transform hover:rotate-12 transition-transform duration-300">
              2
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Main Themes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-500/50 p-6 rounded-lg backdrop-blur-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="inline-block w-8 h-8 bg-amber-50 text-gray-900 rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                The American Dream
              </h3>
              <p className="text-white">
                Fitzgerald uses Gatsby's rise-and-fall story to critique the
                1920s notion of the American Dream. Gatsby exemplifies the
                self-made man who has pulled himself up from poverty, yet his
                dream – centered on winning Daisy's love – proves unattainable.
                As one scholar argues, Gatsby becomes a kind of "false prophet"
                of the American Dream, showing that pursuing wealth and status
                ultimately leads to disillusionment. The ever-present green
                light at the end of Daisy's dock symbolizes the dream that
                forever recedes. In Gatsby's case, no amount of money can
                recreate the past or satisfy his ideal; he chases a dream that
                is corrupted by materialism and inequality.
              </p>
            </div>

            <div className="bg-gray-400/50 p-6 rounded-lg backdrop-blur-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="inline-block w-8 h-8 bg-amber-50 text-gray-900 rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Wealth and Class
              </h3>
              <p className="text-white">
                The novel highlights rigid social divisions in 1920s America.
                East Egg represents old money – families like the Buchanans who
                inherited their fortunes – while West Egg is new money,
                exemplified by Gatsby. Despite Gatsby's enormous wealth and
                lavish parties, East Eggers scorn his background; Nick notes
                that "a sense of the fundamental decencies is parceled out
                unequally" among them (he finds the Buchanans cruelly careless).
                Critics observe that Fitzgerald shows class as effectively
                permanent: even though Gatsby is rich, he is never truly
                accepted by the established elite. The "valley of ashes," where
                the impoverished Wilsons live, further underlines the gulf
                between the wealthy and the poor. In the end, money is shown to
                be a poor substitute for the social pedigree and respect enjoyed
                by the aristocracy.
              </p>
            </div>

            <div className="bg-gray-600/50 p-6 rounded-lg backdrop-blur-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="inline-block w-8 h-8 bg-amber-50 text-gray-900 rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Illusion vs. Reality
              </h3>
              <p className="text-white">
                Much of The Great Gatsby is built on illusions and the
                shattering of them. Gatsby himself has constructed a glamorous
                identity (even changing his name) to mask his humble origins,
                all to pursue an idealized dream. He "instills Daisy with a kind
                of idealized perfection that she neither deserves nor
                possesses," according to SparkNotes. In other words, Gatsby
                loves a fantasy version of Daisy more than the real person.
                Likewise, the novel's setting seems dazzling – a world of jazz
                and champagne – but this façade hides moral emptiness and
                desperation. When reality intrudes (through Tom's confrontation
                or Myrtle's death), the spell is broken. Fitzgerald suggests
                that beneath the shimmering surface of parties and wealth lies a
                harsh truth, and those who live by dreamlike illusions often end
                in tragedy.
              </p>
            </div>

            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="inline-block w-8 h-8 bg-amber-50 text-gray-900 rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Love
              </h3>
              <p className="text-white">
                At its heart the novel depicts thwarted love and the distortions
                it suffers in a materialistic world. Gatsby's passionate
                devotion to Daisy – rooted in youthful idealism – drives the
                story. He believes that if he amasses enough wealth he can
                recreate the past and win Daisy completely. But, as critics
                note, Gatsby's dream of loving Daisy "is ruined by the
                difference in their respective social statuses, his resorting to
                crime..., and the rampant materialism" around her. When forced
                to choose, Daisy ultimately cares more for her money and comfort
                than for Gatsby's grand gestures. Even Tom and Daisy's marriage
                is based on convenience and class solidarity rather than true
                love. Nick observes that Tom and Daisy are "careless people" who
                ultimately retreat back into their wealth and leave others to
                clean up the mess they've made. In this sense, the novel
                portrays love as fragile and often overshadowed by wealth and
                illusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Context Section */}
      <section
        ref={sectionRefs.historical}
        className="bg-white py-12 px-6 md:px-12 lg:px-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-slate-500 flex items-center justify-center text-white font-bold mr-4 transform hover:rotate-12 transition-transform duration-300">
              3
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Historical Context
            </h2>
          </div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-300 hidden md:block"></div>
            <div className="absolute -left-6 top-1/4 w-5 h-5 bg-gray-500 rounded-full hidden md:block"></div>
            <div className="absolute -left-6 top-2/4 w-5 h-5 bg-gray-500 rounded-full hidden md:block"></div>
            <div className="absolute -left-6 top-3/4 w-5 h-5 bg-gray-500 rounded-full hidden md:block"></div>

            <div className="prose prose-lg max-w-none text-gray-700 md:pl-8 space-y-4">
              <p>
                <span className="text-slate-900 font-bold">
                  The Great Gatsby
                </span>{" "}
                is set in the early 1920s, often called the{" "}
                <span className="italic">Roaring Twenties</span> or{" "}
                <span className="italic">Jazz Age</span>. This was a time of
                unprecedented prosperity and social change in post–World War I
                America. The U.S. economy boomed: stock markets soared and
                consumer culture expanded rapidly. Jazz music, flamboyant
                fashion (flappers, bobbed hair, etc.), and a more permissive
                nightlife became cultural hallmarks. As F. Scott Fitzgerald
                later observed, Americans in this era were "a whole race going
                hedonistic, deciding on pleasure". Many young people, especially
                returning soldiers, felt disillusioned by the horrors of the war
                and rejected older social norms in favor of parties, dancing,
                and a carefree lifestyle. Fitzgerald's novel captures this
                background vividly: it unfolds amid Gatsby's wild weekend
                parties, jazz orchestras, and a sense that the future is wide
                open.
              </p>
              <p>
                A defining feature of the 1920s was{" "}
                <span className="text-slate-900 font-bold">Prohibition</span>.
                The 18th Amendment (ratified in 1919) banned the manufacture and
                sale of alcoholic beverages across the country. Instead of
                stopping Americans from drinking, Prohibition drove alcohol
                underground into speakeasies and illegal bars. Organized crime
                and bootlegging became rampant to meet the demand for liquor.
                Gatsby's own fortune is tied to this context: Tom Buchanan
                eventually reveals that Gatsby "earned his money by selling
                illegal alcohol" during Prohibition. In other words, Gatsby's
                rise is a direct result of the era's black-market liquor trade.
                The novel uses this setting – flouting the law in lush,
                secretive parties – to highlight the era's moral complexity.
              </p>
              <p>
                In sum,{" "}
                <span className="text-slate-900 font-bold">
                  The Great Gatsby
                </span>{" "}
                is deeply rooted in its historical moment: the glitz and turmoil
                of the 1920s (stock-market booms, jazz culture, women's new
                freedoms, and Prohibition's contradictions) form the social
                backdrop that shapes every character's actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Summary;
