import Link from 'next/link';
import React from 'react';
//These are Third party packages for smooth slideshow
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = () => {
  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    indicators: true,
    scale: 0.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
  };
  return (
    <div className="widget_slider_area">
      <section
        id="colormag_featured_posts_slider_widget-5"
        className="widget widget_featured_slider widget_featured_meta clearfix"
      >
        <div>
          <Zoom {...zoomInProperties}>
            <div className="single-slide displaynone">
              <figure className="slider-featured-image">
                <Link
                  href="/posts/%e0%a6%a8%e0%a6%ac%e0%a7%80-%e0%a6%ae%e0%a7%81%e0%a6%b9%e0%a6%be%e0%a6%ae%e0%a7%8d%e0%a6%ae%e0%a6%a6-%e0%a6%95%e0%a6%bf-%e0%a6%b8%e0%a6%b0%e0%a7%8d%e0%a6%ac%e0%a6%95%e0%a6%be%e0%a6%b2%e0%a7%87/"
                  title="নবী মুহাম্মদ কি সর্বকালের সর্বশ্রেষ্ঠ মানুষ ছিলেন?"
                >
                  <img
                    src="https://i0.wp.com/www.shongshoy.com/wp-content/uploads/2021/01/Muhammad_warlord.jpg?w=750&ssl=1"
                    alt="নবী মুহাম্মদ কি সর্বকালের সর্বশ্রেষ্ঠ মানুষ ছিলেন?"
                    title="নবী মুহাম্মদ কি সর্বকালের সর্বশ্রেষ্ঠ মানুষ ছিলেন?"
                  />
                </Link>
              </figure>
              <div className="slide-content">
                <h3 className="entry-title">
                  <Link
                    href="/posts/%e0%a6%a8%e0%a6%ac%e0%a7%80-%e0%a6%ae%e0%a7%81%e0%a6%b9%e0%a6%be%e0%a6%ae%e0%a7%8d%e0%a6%ae%e0%a6%a6-%e0%a6%95%e0%a6%bf-%e0%a6%b8%e0%a6%b0%e0%a7%8d%e0%a6%ac%e0%a6%95%e0%a6%be%e0%a6%b2%e0%a7%87/"
                    title="নবী মুহাম্মদ কি সর্বকালের সর্বশ্রেষ্ঠ মানুষ ছিলেন?"
                  >
                    নবী মুহাম্মদ কি সর্বকালের সর্বশ্রেষ্ঠ মানুষ ছিলেন?
                  </Link>
                </h3>
              </div>
            </div>

            <div className="single-slide displaynone">
              <figure className="slider-featured-image">
                <Link
                  href="/posts/%e0%a6%95%e0%a7%8b%e0%a6%b0%e0%a6%86%e0%a6%a8-%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a6%b2%e0%a6%a8-%e0%a6%aa%e0%a6%b0%e0%a6%bf%e0%a6%ae%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%9c%e0%a6%a8/"
                  title="কোরআন সংকলন এবং পরিমার্জনের ইতিহাস"
                >
                  <img
                    src="https://i0.wp.com/www.shongshoy.com/wp-content/uploads/2020/01/quran_compile.jpg?w=750&ssl=1"
                    alt="কোরআন সংকলন এবং পরিমার্জনের ইতিহাস"
                    title="কোরআন সংকলন এবং পরিমার্জনের ইতিহাস"
                  />
                </Link>
              </figure>
              <div className="slide-content">
                <h3 className="entry-title">
                  <Link
                    href="/posts/%e0%a6%95%e0%a7%8b%e0%a6%b0%e0%a6%86%e0%a6%a8-%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a6%b2%e0%a6%a8-%e0%a6%aa%e0%a6%b0%e0%a6%bf%e0%a6%ae%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%9c%e0%a6%a8/"
                    title="কোরআন সংকলন এবং পরিমার্জনের ইতিহাস"
                  >
                    কোরআন সংকলন এবং পরিমার্জনের ইতিহাস
                  </Link>
                </h3>
              </div>
            </div>

            <div className="single-slide displaynone">
              <figure className="slider-featured-image">
                <Link
                  href="/posts/%e0%a6%86%e0%a7%9f%e0%a6%bf%e0%a6%b6%e0%a6%be%e0%a6%b0-%e0%a6%ac%e0%a6%be%e0%a6%b2%e0%a7%8d%e0%a6%af%e0%a6%ac%e0%a6%bf%e0%a6%ac%e0%a6%be%e0%a6%b9/"
                  title="বাল্যবিবাহ, পেডোফিলিয়া এবং ইসলাম – আয়িশা কি ৯ বছর বয়সে বয়ঃসন্ধিকালে পৌঁছেছিলেন?"
                >
                  <img
                    src="https://i0.wp.com/www.shongshoy.com/wp-content/uploads/2019/12/child_marriage_in_islam.jpg?w=750&ssl=1"
                    alt="বাল্যবিবাহ, পেডোফিলিয়া এবং ইসলাম – আয়িশা কি ৯ বছর বয়সে বয়ঃসন্ধিকালে পৌঁছেছিলেন?"
                    title="বাল্যবিবাহ, পেডোফিলিয়া এবং ইসলাম – আয়িশা কি ৯ বছর বয়সে বয়ঃসন্ধিকালে পৌঁছেছিলেন?"
                  />
                </Link>
              </figure>
              <div className="slide-content">
                <h3 className="entry-title">
                  <Link
                    href="/posts/%e0%a6%86%e0%a7%9f%e0%a6%bf%e0%a6%b6%e0%a6%be%e0%a6%b0-%e0%a6%ac%e0%a6%be%e0%a6%b2%e0%a7%8d%e0%a6%af%e0%a6%ac%e0%a6%bf%e0%a6%ac%e0%a6%be%e0%a6%b9/"
                    title="বাল্যবিবাহ, পেডোফিলিয়া এবং ইসলাম – আয়িশা কি ৯ বছর বয়সে বয়ঃসন্ধিকালে পৌঁছেছিলেন?"
                  >
                    বাল্যবিবাহ, পেডোফিলিয়া এবং ইসলাম – আয়িশা কি ৯ বছর বয়সে বয়ঃসন্ধিকালে পৌঁছেছিলেন?
                  </Link>
                </h3>
              </div>
            </div>

            <div className="single-slide displaynone">
              <figure className="slider-featured-image">
                <Link
                  href="/posts/%e0%a6%87%e0%a6%b8%e0%a6%b2%e0%a6%be%e0%a6%ae%e0%a7%87-%e0%a6%a4%e0%a6%be%e0%a6%95%e0%a6%a6%e0%a7%80%e0%a6%b0/"
                  title="ইসলামের অন্যতম ভিত্তি তাকদীর প্রসঙ্গে"
                >
                  <img
                    src="https://i0.wp.com/www.shongshoy.com/wp-content/uploads/2019/08/taqdeer_shongshoy.jpg?w=750&ssl=1"
                    alt="ইসলামের অন্যতম ভিত্তি তাকদীর প্রসঙ্গে"
                    title="ইসলামের অন্যতম ভিত্তি তাকদীর প্রসঙ্গে"
                  />
                </Link>
              </figure>
              <div className="slide-content">
                <h3 className="entry-title">
                  <Link
                    href="/posts/%e0%a6%87%e0%a6%b8%e0%a6%b2%e0%a6%be%e0%a6%ae%e0%a7%87-%e0%a6%a4%e0%a6%be%e0%a6%95%e0%a6%a6%e0%a7%80%e0%a6%b0/"
                    title="ইসলামের অন্যতম ভিত্তি তাকদীর প্রসঙ্গে"
                  >
                    ইসলামের অন্যতম ভিত্তি তাকদীর প্রসঙ্গে{' '}
                  </Link>
                </h3>
              </div>
            </div>
          </Zoom>
        </div>
      </section>{' '}
    </div>
  );
};

export default Slideshow;
