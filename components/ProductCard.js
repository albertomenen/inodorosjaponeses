import Image from 'next/image';
import Link from 'next/link';
import Price from '../pages/Price';

function ProductCard({ product }) {
  const { slug, title, description, price, image } = product.attributes;
  const imageNode = image?.data?.[0]?.attributes || {};

  return (
    <Link
      href={`/products/${slug}`}
      passHref
    >
      <a className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
        <div className="h-72 border-b-2 border-palette-lighter relative">
          {imageNode.url && (
            <Image
              src={`http://localhost:1337${imageNode.url}`}
              alt={imageNode.alternativeText || 'Product Image'}
              layout="fill"
              className="transform duration-500 ease-in-out hover:scale-110"
            />
          )}
        </div>
        <div className="h-48 relative">
          <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
            {title}
          </div>
          <div className="text-lg text-gray-600 p-4 font-primary font-light">
            {description}
          </div>
          <div
            className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm triangle"
          >
            <Price
              currency="$"
              num={price}
              numSize="text-lg"
            />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ProductCard;