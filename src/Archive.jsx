import Header from "./Header"; 

const books = [
  {
    image: 'https://i.imgur.com/4K34cvE.jpeg',
    title: 'The Great Gatsby (1925)',
    summary: 'A tragic story of Jay Gatsby and his unrelenting love for Daisy Buchanan, set in the Jazz Age of 1920s America.',
    link: 'https://en.wikipedia.org/wiki/The_Great_Gatsby',
  },
  {
    image: 'https://i.imgur.com/RSZ89Lx.jpeg',
    title: 'Tender Is the Night (1934)',
    summary: 'A novel about the rise and fall of Dick Diver, a charming psychiatrist, and his wife Nicole, set in the French Riviera.',
     link: 'https://en.wikipedia.org/wiki/Tender_Is_the_Night',
  },
  {
    image: 'https://i.imgur.com/koElDfS.jpeg',
    title: 'This Side of Paradise (1920)',
    summary: 'Fitzgerald’s debut novel following the life of Amory Blaine as he navigates youth, love, and ambition in post–World War I America.',
    link: 'https://en.wikipedia.org/wiki/This_Side_of_Paradise',
  },
  {
    image: 'https://i.imgur.com/CA5Vu5a.png',
    title: 'The Beautiful and Damned (1922)',
    summary: 'A story of Anthony and Gloria Patch’s lavish lifestyle and their descent into ruin as their wealth and relationship deteriorate.',
    link: 'https://en.wikipedia.org/wiki/The_Beautiful_and_Damned',
  },
  {
    image: 'https://i.imgur.com/kpf00Rx.jpeg',
    title: 'The Last Tycoon (1941)',
    summary: 'An unfinished novel that offers a look into Hollywood’s Golden Age through the life of Monroe Stahr, a brilliant film producer.',
    link: 'https://en.wikipedia.org/wiki/The_Last_Tycoon',
  },
  {
    image: 'https://i.imgur.com/U8rMgeG.png',
    title: 'Flappers and Philosophers (1920)',
    summary: 'A collection of short stories capturing the spirit of the Jazz Age, dealing with themes of youth, beauty, and social ambition in 1920s America.',
    link: 'https://en.wikipedia.org/wiki/Flappers_and_Philosophers',
}
];

export default function Archive() {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header/>
        <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
      `}</style>

        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-1 text-transparent bg-clip-text bg-white text-center">
           Fitzgerald Archive
          </h1>
          <h4 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gray-500 text-center">
           through the years
          </h4>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 slide-in-left">
          {books.map((book, index) => (
            <div
              key={index}
              className="border border-transparent rounded-xl p-4 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 h-full"
            >
          <a
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-transparent rounded-xl p-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-xl duration-300 h-full"
          >
            {book.image && (
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
              <h3 className="text-xl font-bold">{book.title}</h3>
              <p className="text-gray-400 mt-2">{book.summary}</p>
            </a>
            </div>
          ))}
        </div>
    </div>
      </div>
 );
};