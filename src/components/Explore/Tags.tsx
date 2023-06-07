const categories = [
  'Tudo',
  'Computação',
  'Educação',
  'Fantasia',
  'Ficção científica',
  'Horror',
  'HQs',
  'Suspense',
];

export function Tags() {
  return (
    <div className="flex items-center gap-3">
      {categories.map((item, idx) => {
        return (
          <a
            key={idx}
            href={item}
            className="flex py-2 px-4 border border-solid border-purple100 rounded-full text-purple100 text-sm cursor pointer hover:bg-purple200 hover:text-gray100"
          >
            {item}
          </a>
        );
      })}
    </div>
  );
}
