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
                      <span>{title} ??? ????????????????????????</span>
                    </h3>
                    <div className="textwidget">
                      <p>
                        ?????????????????? ??? ????????????????????? ????????????????????? ???????????????????????? ???????????? ????????????????????? ??????????????????????????? ?????? ?????????????????????????????? ????????? ???????????? ????????????????????? ???????????????,
                        ??????????????????????????? ?????????????????? ???????????????????????? ????????? ????????? ?????????????????? ????????? ??????????????? ???????????? ?????????????????? ??????????????????????????? ????????????????????? ???????????????????????????????????????
                        ?????????????????? ????????? ???????????????????????? ????????????????????? ???????????? ??????????????????????????? ???????????? ???????????? ???????????????????????? ??????????????? ?????????????????? ???????????????????????? ?????????????????? ????????????
                        ???????????? ????????? ???????????? ??????????????????????????? ????????????????????? ??????????????? ?????????????????? ?????? ?????????????????? ???????????? ??????????????????, ???????????????????????? ????????? ???????????????????????? ??????????????????
                        ?????????????????? ????????? ???????????????????????? ?????????????????????????????? ????????????, ????????? ??????????????? ????????? ?????????????????? ???????????? ???????????? ???????????? ??????????????????- ????????????, ??????????????????
                        ????????? ????????????????????????????????? ???????????????????????? ??????????????????????????? ????????????????????? ???????????????????????? ?????????????????? ?????????????????? ????????????????????? ????????? ??????????????????????????????
                        ???????????????????????? ???????????? ??????????????? ??????????????? ????????????????????? ???????????????????????? ??????????????? ??????????????? ?????????????????? ???????????????????????? ?????????????????? ???????????? ????????? ??????????????????
                        ?????????????????? ??????????????? ??????????????????????????? ???????????? ??????????????? ???????????????
                      </p>
                    </div>
                  </aside>
                </div>
              </div>
              <div className="tg-footer-other-widgets">
                <div className="tg-second-footer-widget">
                  <aside id="text-4" className="widget widget_text clearfix">
                    <h3 className="widget-title">
                      <span>?????????????????????</span>
                    </h3>
                    <div className="textwidget">
                      <p>
                        ???????????? ????????????????????? ???????????? ?????????????????? ???????????? ???????????? ???????????? ??????????????? ??????????????? ???????????????????????????????????????????????? ?????????????????????????????? ??????????????? ???????????????????????????
                        ???????????? ?????????????????? ????????????
                        <br />
                        <a href="https://shongshoy.com/wp-login.php?action=register">
                          ???????????????????????????????????? ?????? ????????????????????????????????? ???????????????
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
                      <span>?????????????????????????????????</span>
                    </h3>
                    <ul>
                      <li>
                        <a rel="nofollow" href="https://www.shongshoy.com/wp-login.php?action=register">
                          ????????????????????? ????????????
                        </a>
                      </li>
                      <li>
                        <a rel="nofollow" href="https://www.shongshoy.com/wp-login.php">
                          ??????????????????
                        </a>
                      </li>
                      <li>
                        <a href="https://www.shongshoy.com/feed/">????????????????????? ?????????</a>
                      </li>
                      <li>
                        <a href="https://www.shongshoy.com/comments/feed/">?????????????????? ?????????</a>
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
                  Copyright ?? 2022{' '}
                  <a href="https://www.shongshoy.com/" alt="??????????????? ??? ????????????????????? ????????????????????? ?????????????????????">
                    <span>??????????????? ??? ????????????????????? ????????????????????? ?????????????????????</span>
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
