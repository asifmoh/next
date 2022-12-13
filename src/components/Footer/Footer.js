import Link from 'next/link';

import useSite from 'hooks/use-site';
import { postPathBySlug } from 'lib/posts';
import { categoryPathBySlug } from 'lib/categories';

import Section from 'components/Section';
import Container from 'components/Container';

import styles from './Footer.module.scss';

const Footer = () => {
  const { metadata = {}, recentPosts = [], categories = [] } = useSite();
  const { title } = metadata;

  const hasRecentPosts = Array.isArray(recentPosts) && recentPosts.length > 0;
  const hasRecentCategories = Array.isArray(categories) && categories.length > 0;
  const hasMenu = hasRecentPosts || hasRecentCategories;

  return (
    <footer className={styles.footer}>
      {hasMenu && (
        <Section className={styles.footerMenu}>
          <Container>
            <ul className={styles.footerMenuColumns}>
              {hasRecentPosts && (
                <li>
                  <Link href="/posts/" className={styles.footerMenuTitle}>
                    <strong>Recent Posts</strong>
                  </Link>
                  <ul className={styles.footerMenuItems}>
                    {recentPosts.map((post) => {
                      const { id, slug, title } = post;
                      return (
                        <li key={id}>
                          <Link href={postPathBySlug(slug)} legacyBehavior>
                            <a>{title}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}
              {hasRecentCategories && (
                <li>
                  <Link href="/categories/" legacyBehavior>
                    <a className={styles.footerMenuTitle}>
                      <strong>Categories</strong>
                    </a>
                  </Link>
                  <ul className={styles.footerMenuItems}>
                    {categories.map((category) => {
                      const { id, slug, name } = category;
                      return (
                        <li key={id}>
                          <Link href={categoryPathBySlug(slug)} legacyBehavior>
                            <a>{name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}
              <li>
                <p className={styles.footerMenuTitle}>
                  <strong>More</strong>
                </p>
                <ul className={styles.footerMenuItems}>
                  <li>
                    <a href="/feed.xml">RSS</a>
                  </li>
                  <li>
                    <a href="/sitemap.xml">Sitemap</a>
                  </li>
                </ul>
              </li>
            </ul>
          </Container>
        </Section>
      )}

      <Section id="colophon" className="clearfix ">
        <div className="footer-widgets-wrapper">
          <div className="inner-wrap">
            <div className="footer-widgets-area clearfix">
              <div className="tg-footer-main-widget">
                <div className="tg-first-footer-widget">
                  <aside id="text-3" className="widget widget_text clearfix">
                    <h3 className="widget-title">
                      <span>{title} – সম্পর্কে</span>
                    </h3>
                    <div className="textwidget">
                      <p>
                        “সংশয় – চিন্তার মুক্তির আন্দোলন” একটি অলাভজনক ওয়েবসাইট। এই ওয়েবসাইটের সকল লেখা কপিরাইট মুক্ত,
                        শুধুমাত্র আমাদের ওয়েবসাইট এবং মূল লেখকের নাম যুক্ত করার শর্তে। শুধুমাত্র পাঠকদের বুদ্ধিবৃত্তিক
                        বিতর্ক এবং আলোচনাকে উৎসাহিত করার উদ্দেশ্যে তৈরি করা। বাঙলাদেশ সরকার কর্তৃক ইতিমধ্যে আমাদের অনেক
                        লেখক এবং গোটা ওয়েবসাইটই নিষিদ্ধ ঘোষিত হয়েছে। যা আমাদের জন্য গর্বের, সম্মানের এবং আনন্দের। অসংখ্য
                        আক্রমণ এবং রাজনৈতিক নির্যাতনের পরেও, জেল জুলুম এবং মামলার পরেও আমরা লিখে যাচ্ছি- সত্য, যুক্তি
                        এবং মুক্তচিন্তা প্রসারের স্বার্থে। আপনাদের সহযোগিতা আমাদের কাম্য। অনুগ্রহ করে ওয়েবসাইটটি
                        বন্ধুদের সাথে শেয়ার করুন। অলাভজনক ওয়েবসাইট হওয়ার কারণে আমাদের সামর্থ্য সীমিত। আপনি কোন ডোনেশন
                        পাঠাতে চাইলে সম্পাদকের কাছে ইমেইল করুন।
                      </p>
                    </div>
                  </aside>
                </div>
              </div>
              <div className="tg-footer-other-widgets">
                <div className="tg-second-footer-widget">
                  <aside id="text-4" className="widget widget_text clearfix">
                    <h3 className="widget-title">
                      <span>যোগাযোগ</span>
                    </h3>
                    <div className="textwidget">
                      <p>
                        লেখা পাঠাবার জন্য আমাদের কাছে একটি লেখা ইমেইল করুন। রেফারেন্সভিত্তিক তথ্যসমৃদ্ধ লেখাই শুধুমাত্র
                        আমরা প্রকাশ করি।
                        <br />
                        <a href="https://shongshoy.com/wp-login.php?action=register">
                          রেজিস্ট্রেশন বা সাবস্ক্রাইব করুন।
                        </a>
                        <br />
                        Editor-in-Chief: Asif Mohiuddin <a>Send Mail</a>
                        <br />
                        Article Editor: Matubbar Azad Avijit <a>Send Mail</a>
                        <br />
                        Rebuttal Editor: Marufur Rahman Khan <a>Send Mail</a>
                        <br />
                        Science Editor: Dr. Amit <a>Send Mail</a>
                        <br />
                        Content Editor: Jack Piter <a>Send Mail</a>
                      </p>
                    </div>
                  </aside>
                </div>

                <div className="tg-fourth-footer-widget">
                  <aside id="meta-5" className="widget widget_meta clearfix">
                    <h3 className="widget-title">
                      <span>প্রবেশদ্বার</span>
                    </h3>
                    <ul>
                      <li>
                        <a rel="nofollow" href="https://www.shongshoy.com/wp-login.php?action=register">
                          নিবন্ধন করুন
                        </a>
                      </li>
                      <li>
                        <a rel="nofollow" href="https://www.shongshoy.com/wp-login.php">
                          প্রবেশ
                        </a>
                      </li>
                      <li>
                        <a href="https://www.shongshoy.com/feed/">এন্ট্রি ফিড</a>
                      </li>
                      <li>
                        <a href="https://www.shongshoy.com/comments/feed/">কমেন্ট ফিড</a>
                      </li>
                      <li>
                        <a href="https://wordpress.org/%20">WordPress.org</a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-socket-wrapper clearfix">
          <div className="inner-wrap">
            <div className="footer-socket-area">
              <div className="footer-socket-right-section">
                <div className="social-links">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/shongshoydotcom">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/iamasifm">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCAutFggTjBZJdOnHfGA9nQQ">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-socket-left-section">
                <div className="copyright">
                  Copyright © 2022{' '}
                  <a href="https://www.shongshoy.com/" alt="সংশয় – চিন্তার মুক্তির আন্দোলন">
                    <span>সংশয় – চিন্তার মুক্তির আন্দোলন</span>
                  </a>
                  . All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
