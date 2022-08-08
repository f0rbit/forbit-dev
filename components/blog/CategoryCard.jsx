export default function CategoryCard({ category }) {
  if (!category) return <div>Error!</div>;
  const divStyle = {
    backgroundColor: category.colour,
  };
  return (
    <div
      style={divStyle}
      className="whitespace-nowrap rounded-md py-1 px-2 text-center text-white"
      title={category.description}
    >
      <div className="drop-shadow-md">
        {category.categoryName.toUpperCase()}
      </div>
    </div>
  );
}
