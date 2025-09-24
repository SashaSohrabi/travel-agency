import { Link } from 'react-router';

export default function Card({ slug, title, image, description }) {
  
  return (
    <div className="card bg-base-100 w-96 border border-base-300 shadow-sm">
      <figure className="flex items-center justify-center px-10 pt-10">
        <img
          src={image}
          alt={title}
          className="h-48 w-full rounded-xl object-cover object-[50%_80%]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link to={`/destinations/${slug}`} className="btn btn-secondary">
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
}
