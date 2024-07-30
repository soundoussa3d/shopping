import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className=" flex container ">
            <div className="flex w-fit gap-2 mx-auto font-medium py-4 text-blackish">
                <Link className='navbar__link relative ' href="#">
                    HOME
                </Link>
            </div>

            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                <Link className='navbar__link relative ' href="#">
                    CATEGORIES
                </Link>
            </div>

            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                <Link className='navbar__link relative ' href="#">
                    MEN'S
                </Link>
            </div>

            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                <Link className='navbar__link relative ' href="#">
                    WOMEN'S
                </Link>
            </div>

            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                <Link className='navbar__link relative ' href="#">
                    JEWELRY
                </Link>
            </div>

            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                <Link className='navbar__link relative ' href="#">
                    PERFUME
                </Link>
            </div>

            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                <Link className='navbar__link relative ' href="#">
                    BLOG
                </Link>
            </div>

            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                <Link className='navbar__link relative ' href="#">
                    HOT OFFERS
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar