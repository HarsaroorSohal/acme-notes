import Image from "next/image";
import { StarsIcon } from "../icons";

const reviewersData = [
  {
    name: "Harsaroor Sohal",
    position: "CTO - Junglee Games",
    imageUrl:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1180&q=80",
    rating: 5,
    review:
      "Acme Notes has been a game-changer for me! Its intuitive interface and powerful features make it easy for me to jot down ideas, collaborate with clients, and keep track of deadlines. Highly recommended!",
  },
  {
    name: "Saee Abhyankar",
    position: "CPO - Builder.io",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1180&q=80",
    rating: 5,
    review:
      "I've tried several note-taking apps in the past, but Acme Notes stands out for its simplicity and effectiveness. Whether I'm in a meeting, brainstorming ideas, or jotting down reminders, Acme Notes makes the process seamless. It's become an essential tool in my daily workflow!",
  },
  {
    name: "Saransh Chauhan",
    position: "Data Lead - Atlan",
    imageUrl:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    rating: 4,
    review:
      "Acme Notes has been a lifesaver for keeping track of lecture notes, assignments, and study materials. With Acme Notes, I feel more confident and prepared for success in my academic journey.",
  },
];

const Reviews = () => {
  return (
    <section className=" bg-gradient-to-t from-white to-yellow-400 ">
      <div className="mx-auto max-w-screen-xl px-4 py-12">
        <h2 className="text-center text-2xl font-bold tracking-tight text-black md:text-4xl">
          Read reviews from our trusted customers
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {reviewersData.map((review, i) => {
            return (
              <blockquote
                key={i}
                className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 transition hover:scale-[1.04] hover:bg-yellow-100"
              >
                <div className="flex items-center gap-4">
                  <Image
                    alt={`${review.name}-avatar`}
                    src={review.imageUrl}
                    className="size-14 rounded-full object-cover"
                    width={100}
                    height={100}
                  />

                  <div>
                    {StarsIcon(review.rating)}
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      {review.name}
                    </p>
                    <p className="text-gray-500 text-sm">{review.position}</p>{" "}
                  </div>
                </div>

                <p className="mt-4 text-gray-700">{review.review}</p>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
