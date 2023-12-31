type Props = {
  name: string;
  description?: string;
  image: string;
};

function Class({ name, description, image }: Props) {
  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center  justify-center whitespace-normal bg-gray-30 text-center text-white opacity-0 transition duration-500 hover:opacity-80`;
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-8">{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  );
}

export default Class;
