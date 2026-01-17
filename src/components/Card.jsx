const Card = ({ props }) => {
  return (
    <article className="flex flex-col rounded bg-linear-to-b from-purple-500 to-blue-500 p-4">
      <img className="w-full" src="https://placehold.co/400" alt="" />
      <div className="bg-white flex-1 p-3 space-y-2.5">
        <header>
          <h3 className="text-xl font-bold">{props?.title}</h3>
        </header>
        <p>{props?.body}</p>
      </div>
    </article>
  );
};

export default Card;
