import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[320px]'>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] || 
            "data:image/jpeg;base64,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"
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.name}
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.address}
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.description}
          </p>
          <p className='text-slate-500 mt-2 font-semibold '>
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / month'}
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className='font-bold text-xs'>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}