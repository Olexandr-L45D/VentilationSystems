// import React, { FC } from 'react';
// import { Container } from 'reactstrap';
// import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';

// import { useModal } from 'hooks/useModal';
// import { DropdownCategories } from '../DropdownCategories/DropdownCategories';
// import { ICategoryData } from '../../../interfaces/category/category';
// import Route from '../../route/Route';
// import { DiscountSvg } from '../../svgs/Discount.svg';
// import classes from './MainNav.module.scss';
// import SvgIcon from 'components/SvgIcon/SvgIcon';

// const ContactUs = dynamic(() => import('@modals/contact-us/ContactUs'), { ssr: false });

// export const MainNav: FC<ICategoryData> = ({ categories, showMainNav }) => {
//   const [contactUsState, toggleContactUsState] = useModal();
//   const router = useRouter();

//   const bottombarClasses = `${classes.bottombar} ${
//     !showMainNav ? classes.hiddenNav : classes.showNav
//   }`;

//   // --- Підстраховка та унікалізація категорій ---
//   const seenToysi = new Set<string>();
//   const uniqueCategories = categories
//     ?.filter((c) => c?.status !== 'pending')
//     .sort((a, b) => (a?.name > b?.name ? 1 : -1))
//     .map((category) => {
//       if (!category?.key) return null;

//       if (category.key.startsWith('toysi-')) {
//         if (!seenToysi.has('toysi')) {
//           seenToysi.add('toysi');
//           return {
//             ...category,
//             displayName: 'Toysi',
//             isToysi: true,
//             children: category.children || [],
//           };
//         }
//         return null; // дублікати Toysi пропускаємо
//       }
//       return { ...category, displayName: category?.name || 'Без назви', isToysi: false };
//     })
//     .filter(Boolean);

//   return (
//     <div className={bottombarClasses}>
//       <Container className={classes.bottombar__inner}>
//         <ul className={classes.bottombar__nav}>
//           {/* <DropdownCategories categories={categories} onInnerNavHover={() => null} /> */}
//           {/* передаємо тільки унікальні категорії */}
//           <DropdownCategories categories={uniqueCategories} onInnerNavHover={() => null} />
//           <li
//             className={
//               router.asPath.split('/')[1] === 'discount-products'
//                 ? classes.categories_active
//                 : classes.categories
//             }
//           >
//             <Route href={'/discount-products'}>
//               <DiscountSvg width={21} height={21} stroke={'#4e5a5e'} />
//               АКЦІЇ
//             </Route>
//           </li>
//           <li
//             className={
//               router.asPath.split('/')[1] === 'draw'
//                 ? classes.categories_active
//                 : classes.categories
//             }
//           >
//             <Route href={'/draw'}>
//               <SvgIcon name="icon-Hand" />
//               Розіграш
//             </Route>
//           </li>
//         </ul>
//         <ContactUs isOpen={contactUsState} toggle={toggleContactUsState} />
//       </Container>
//     </div>
//   );
// };

// // 2
// import css from './header-catalog.module.scss';
// import { IPageProps } from 'interfaces/page';
// import { CatalogIcon } from 'components/svgs/CatalogIcon.svg';
// import { useEffect } from 'react';

// function HeaderCatalog({ categories }: IPageProps) {
//   // 1. Лог вхідних категорій
//   console.log('%c[CATALOG] Отримав categories:', 'color: #00e676; font-weight: bold;', categories);

//   // 2. Фільтрація
//   const filteredCategories = categories?.filter((category) => category.status !== 'pending');
//   console.log(
//     '%c[CATALOG] Після фільтрації:',
//     'color: #03a9f4;',
//     filteredCategories?.length,
//     filteredCategories
//   );

//   // 3. Сортування
//   const sortedCategories = filteredCategories?.sort((a, b) => (a.name > b.name ? 1 : -1)) || [];
//   console.log(
//     '%c[CATALOG] Після сортування:',
//     'color: #9b59b6;',
//     sortedCategories?.length,
//     sortedCategories
//   );

//   // 4. Рендер категорій (тільки лог, логікою не чіпаю)

//   // 1. Підготовка унікальних категорій
//   const seenToysi = new Set<string>();
//   const uniqueCategories = categories
//     ?.filter((c) => c?.status !== 'pending')
//     .sort((a, b) => (a?.name > b?.name ? 1 : -1))
//     .map((category) => {
//       if (!category?.key) return null; // підстраховка, якщо ключ відсутній

//       if (category.key.startsWith('toysi-')) {
//         if (!seenToysi.has('toysi')) {
//           seenToysi.add('toysi');
//           return {
//             ...category,
//             displayName: 'Toysi',
//             isToysi: true,
//             children: category.children || [], // підкатегорії можуть з’явитися
//           };
//         }
//         return null; // повтори toysi пропускаємо
//       }
//       return { ...category, displayName: category?.name || 'Без назви', isToysi: false };
//     })
//     .filter(Boolean);

//   // 2. Рендер категорій
//   const categoriesRendered = uniqueCategories?.map((category) => {
//     const hasChildren = category?.children?.length > 0;

//     return (
//       <li className="mb-1" key={category?.key || Math.random()}>
//         {hasChildren ? (
//           <>
//             <button
//               className="btn btn-toggle d-inline-flex align-items-left rounded border-0 collapsed fs-5 btn-light"
//               data-bs-toggle="collapse"
//               data-bs-target={`#collapse-${String(category?.id ?? '')}`}
//               aria-expanded="true"
//               style={{ color: '#4e5a5e', width: '320px' }}
//             >
//               {category?.displayName || 'Без назви'}
//             </button>

//             <div className="collapse" id={`collapse-${String(category?.id ?? '')}`}>
//               <ul className="btn-toggle-nav fw-normal pb-1 pl-3 small">
//                 {category?.children
//                   ?.filter((sub) => sub?.status !== 'pending')
//                   .sort((a, b) => (a?.name > b?.name ? 1 : -1))
//                   .map((subCategory) => (
//                     <li key={subCategory?.key || Math.random()}>
//                       {subCategory?.children?.length > 0 ? (
//                         <button
//                           data-bs-toggle="collapse"
//                           data-bs-target={`#${String(subCategory?.id ?? '')}-collapse`}
//                           className="btn btn-toggle d-inline-flex align-items-left rounded border-0 collapsed btn-light"
//                           style={{
//                             color: '#4e5a5e',
//                             width: '320px',
//                             fontSize: '1.15rem',
//                             textAlign: 'left',
//                           }}
//                         >
//                           {subCategory?.name || 'Без назви'}
//                         </button>
//                       ) : (
//                         <a
//                           href={`/${category?.key ?? ''}/${subCategory?.key ?? ''}`}
//                           className="btn btn-toggle d-inline-flex align-items-left rounded border-0 collapsed btn-light"
//                           style={{
//                             color: '#4e5a5e',
//                             width: '320px',
//                             fontSize: '1.15rem',
//                             textAlign: 'left',
//                           }}
//                         >
//                           {subCategory?.name || 'Без назви'}
//                         </a>
//                       )}
//                     </li>
//                   ))}
//               </ul>
//             </div>
//           </>
//         ) : (
//           <a
//             href={`/catalog/${category?.key ?? ''}`}
//             className="btn btn-toggle d-inline-flex align-items-left rounded border-0 collapsed fs-5 btn-light"
//             style={{ color: '#4e5a5e', width: '320px' }}
//           >
//             {category?.displayName || 'Без назви'}
//           </a>
//         )}
//       </li>
//     );
//   });

//   // 5. Перевірка оффканвасу після рендеру
//   // useEffect(() => {
//   //   const el = document.getElementById('offcanvasWithBothOptions');
//   //   console.log('%c[CATALOG] ID оффканвасу після рендера:', 'color: #e67e22;', el);
//   // }, []);

//   console.log(
//     '%c[CATEGORY RAW DATA] Повні категорії:',
//     'background: #111; color: #0f0; padding: 4px;',
//     JSON.stringify(categories, null, 2)
//   );

//   return (
//     <div>
//       <button
//         className={`btn ${css.customBtn} d-flex align-items-center`}
//         type="button"
//         data-bs-toggle="offcanvas"
//         data-bs-target="#offcanvasWithBothOptions"
//         aria-controls="offcanvasWithBothOptions"
//       >
//         <CatalogIcon width={30} height={30} fill={'#ffff'} />
//         <span className="mx-3 fw-bold fs-5">Каталог</span>
//       </button>

//       <div
//         className="offcanvas offcanvas-start p-3"
//         tabIndex={-1}
//         id="offcanvasWithBothOptions"
//         aria-labelledby="offcanvasWithBothOptionsLabel"
//         data-bs-scroll="false"
//       >
//         <div className="offcanvas-header p-2">
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>

//         <div className="offcanvas-body p-2">
//           <div className="flex-shrink-0 p-0" style={{ overflowX: 'hidden' }}>
//             <a
//               href="/"
//               className="d-flex align-items-center justify-content-start pb-2 mb-3 mx-2 link-body-emphasis text-decoration-none border-bottom"
//             >
//               <span className="fs-4 fw-semibold" style={{ color: '#4e5a5e' }}>
//                 Каталог
//               </span>
//             </a>
//             <ul className="list-unstyled ps-0">
//               {categoriesRendered}

//               <li className="mb-1" key="discount-products">
//                 <a
//                   href="/discount-products"
//                   className="btn btn-toggle d-inline-flex align-items-left rounded border-0 collapsed fs-5 btn-light"
//                   style={{ color: '#4e5a5e', width: '320px' }}
//                 >
//                   Акції
//                 </a>
//               </li>

//               <li className="mb-1" key="draw">
//                 <a
//                   href="/draw"
//                   className="btn btn-toggle d-inline-flex align-items-left rounded border-0 collapsed fs-5 btn-light"
//                   style={{ color: '#4e5a5e', width: '320px' }}
//                 >
//                   Розіграші
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeaderCatalog;

// // 3
// import React, { FC, useContext, useState, useEffect, useRef, useCallback } from 'react';
// import { Button, Container } from 'reactstrap';
// import cx from 'classnames';
// import { FcTodoList } from 'react-icons/fc';
// import { BsPeopleCircle } from 'react-icons/bs';
// import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';

// import { api } from '../../api';
// import { useWindowScrollPositions } from '../../hooks/useWindowScrollPosition';
// import { useMedia } from 'hooks/useMedia';
// import Search from './Search/Search';
// import SearchMobile from './Search/SearchMobile';
// import { LoveSvg } from 'components/svgs/Love.svg';
// import { TopBar } from './TopBar/TopBar';
// import { MainNav } from './MainNav/MainNav';
// import { IPageProps } from '../../interfaces/page';
// import { CustomSvg } from '../../interfaces/customSvg';
// import { CartHeaderIcon } from '@modals/cart/сartHeaderIcon';
// import { CartSvg } from '../svgs/Cart.svg';
// import { UserContext } from '../context/user-context';
// import { LikesContext } from 'components/context/likes-context';
// import { EAccountUrls } from '../../interfaces/account/account.enum';
// import { UtilsContext } from '../context/utils-context';
// import Route from '../route/Route';
// import { EAuthTabs } from '../../interfaces/modal';
// import { HeaderState } from '../../interfaces/headerState';
// import { CatalogIcon } from '../svgs/CatalogIcon.svg';
// import UserAvatar from '../user-avatar';
// import CompanyInformation from '../company-information/CompanyInformation';
// import { CompanyInformation as CompanyInfo } from 'constants/company-information';
// import { UseProductsInCart } from '../../hooks/cart/useProductsInCart';
// import { SnackBarContext } from '../context/snackBar-context';
// import DiscountAlert from 'components/discount-alert/DiscountAlert';

// const AuthModal = dynamic(() => import('@modals/auth/AuthModal'), { ssr: false });
// const ConfirmedUserModal = dynamic(() => import('@modals/auth/ConfirmedUserModal'), { ssr: false });
// const IntervalShow = dynamic(() => import('components/hocs/Interval-show'), { ssr: false });
// const CartModal = dynamic(() => import('@modals/cart/cart'), { ssr: false });
// const SideMenu = dynamic(() => import('../SideMenu/SideMenu'), { ssr: false });

// import animations from 'styles/animations.module.scss';
// import styles from '../SideMenu/SideMenu.module.scss';
// import classes from './Header.module.scss';
// import HeaderCatalog from './header-catalog/header-catalog';
// import NavigationMobileMenu from './NavigationMobileMenu/NavigationMobileMenu';

// export const Header: FC<IPageProps> = ({ categories, isWithoutChildren }) => {
//   const { user } = useContext(UserContext);
//   const { likesCount, setLikesCount, updatedCount } = useContext(LikesContext);
//   const isMobile = useMedia(`(max-width: ${styles.md}px)`);
//   const shouldShowMobileMenu = useMedia(`(max-width: ${styles.md}px)`);
//   const isBetweenSmMd = useMedia(`(min-width: 769ıpx) and (max-width: ${classes.md}px)`);
//   const { data: order, productsInCart } = UseProductsInCart();
//   const router = useRouter();
//   const { showSnackBar } = useContext(SnackBarContext);

//   const [isOpenAuthModal, setOpenAuthModal] = useState(false);
//   const [sideMenuOpen, setSideMenu] = useState(false);
//   const [sideMenuDefault, setSideMenuDefault] = useState<boolean>(false);
//   const { cartOpen, setCartOpen } = useContext(UtilsContext);
//   const toggleSideMenu = () => setSideMenu((prevState) => !prevState);

//   console.log('%c[HEADER] categories проп:', 'color: #00bfff; font-weight: bold;', categories);
//   const topbarSwitchContainerRef = useRef<HTMLDivElement | null>(null);

//   const styleIconCart: Partial<CustomSvg> = {
//     height: !isMobile ? 38 : 32,
//     width: !isMobile ? 38 : 32,
//   };

//   const orderCount =
//     productsInCart?.reduce((result, cartItem) => result + cartItem.quantity, 0) || 0;

//   const [modalsState, setModals] = useState<HeaderState>({
//     auth: {
//       open: false,
//       tab: EAuthTabs.login,
//     },
//     contactUs: {
//       open: false,
//     },
//     categories: {
//       open: false,
//     },
//     confirmed: {
//       open: false,
//     },
//   });

//   const toggleConfirmed = () => {
//     setSideMenu(false);
//     setModals((prevState) => ({ ...prevState, confirmed: { open: !prevState.confirmed.open } }));
//   };

//   const toggleContactUs = () => {
//     setSideMenu(false);
//     setModals((prevState) => ({ ...prevState, contactUs: { open: !prevState.contactUs.open } }));
//   };
//   const toggleCategories = () => {
//     setSideMenu(false);
//     setModals((prevState) => {
//       return { ...prevState, categories: { open: !prevState.categories.open } };
//     });
//   };

//   const openingCategoriesIsButton = () => {
//     toggleCategories();
//     setSideMenuDefault(true);
//   };

//   useEffect(() => {
//     sideMenuDefault && setSideMenuDefault(false);
//   }, [sideMenuDefault]);

//   const openCartModal = () => {
//     if (order?.liqpayPaymentStatus === 'success' && user) {
//       showSnackBar('Будь ласка, завершіть спочатку оформлення діючого замовлення.', true);
//       router.push('/delivery');
//     } else {
//       setSideMenu(false);
//       setCartOpen(true);
//     }
//   };

//   const openAuth = (action: number) => {
//     setModals((prevState) => ({ ...prevState, auth: { open: true, tab: action } }));
//   };
//   const toggleAuthModal = () => {
//     setModals((prevState) => ({
//       ...prevState,
//       auth: { ...prevState.auth, open: !prevState.auth.open },
//     }));
//   };

//   const fetchUserLikes = useCallback(async () => {
//     try {
//       if (user) {
//         const { data: likesData } = await api.likes.getUserLikesProduct(user.id, 1);
//         setLikesCount(likesData.count);
//       }
//     } catch (error) {
//       console.error('Error fetching user likes:', error);
//     }
//   }, [user, updatedCount]);

//   useEffect(() => {
//     fetchUserLikes();
//   }, [fetchUserLikes]);

//   const headerIcons = user ? (
//     <>
//       {isBetweenSmMd && (
//         <Button onClick={toggleCategories} className={classes.categoryBtn}>
//           <CatalogIcon width={38} height={38} className={classes.catalogIcon} />
//         </Button>
//       )}
//       <Route href={`/account/${EAccountUrls.orders}`}>
//         <div className={classes.tooltipContainer}>
//           <FcTodoList className={classes.history_icon} size={38} />
//           <div className={classes.tooltipText}>Замовлення</div>
//         </div>
//       </Route>

//       <Route href={`/account/${EAccountUrls.favorite}`}>
//         <div className={classes.labelContainer}>
//           <LoveSvg className={cx(classes.love_icon)} width={37} height={37} color={'none'} />
//           {likesCount > 0 && <div className={classes.label}>{likesCount}</div>}
//           <div className={classes.tooltipText}>Улюблені</div>
//         </div>
//       </Route>
//     </>
//   ) : null;

//   const [isVisible, setVisible] = useState(true);
//   const { scrollY } = useWindowScrollPositions();

//   const handleVisibility = () => {
//     if (isWithoutChildren) {
//       if (scrollY > 0) {
//         setVisible(false);
//       }

//       if (scrollY === 0) {
//         setVisible(true);
//       }
//     }
//   };

//   const handleHoverStart = () => {
//     if (!isVisible) {
//       setVisible(true);
//     }
//   };

//   const handleHoverEnd = () => {
//     if (isWithoutChildren && scrollY > 1) {
//       setVisible(false);
//     }
//   };

//   useEffect(() => {
//     handleVisibility();
//   }, [scrollY, handleVisibility]);

//   const isConfirmedModalShow = modalsState.confirmed.open;
//   // new log
//   console.log(
//     '%c[HEADER RENDER] categories:',
//     'color: #ff8c00; font-weight: bold;',
//     categories?.length,
//     categories
//   );

//   console.log(
//     '%c[CATEGORY RAW DATA] Повні категорії:',
//     'background: #111; color: #0f0; padding: 4px;',
//     JSON.stringify(categories, null, 2)
//   );

//   return (
//     <header
//       className={classes.shop_header}
//       onMouseEnter={handleHoverStart}
//       onMouseLeave={handleHoverEnd}
//     >
//       <TopBar ref={topbarSwitchContainerRef} />
//       <div className={classes.header}>
//         <Container className={classes.container}>
//           {/* {!isMobile && <HeaderCatalog categories={categories} />} */}
//           {!isMobile && (
//             <>
//               {console.log('%c[HEADER] Rendering HeaderCatalog', 'color: #bada55')}
//               <HeaderCatalog categories={categories} />
//             </>
//           )}

//           <section className={classes.header__search_section}>
//             {isMobile && (
//               <Button className={classes.mobileUser} onClick={toggleSideMenu}>
//                 <div className={classes.burger}>
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </div>
//               </Button>
//             )}
//             {isMobile && <SearchMobile />}
//             {isMobile && (
//               <>
//                 <div onClick={openCartModal} className={classes.cart}>
//                   <CartSvg
//                     className={cx(isMobile ? classes.cart_icon_mobile : classes.cart_icon_pc)}
//                     width={styleIconCart.width}
//                     height={styleIconCart.height}
//                   />
//                   {orderCount > 0 && <div className={classes.label}>{orderCount}</div>}
//                 </div>
//                 <NavigationMobileMenu
//                   openAuth={openAuth}
//                   openingCategoriesIsButton={openingCategoriesIsButton}
//                 />
//               </>
//             )}
//             {!isMobile && <Search />}
//           </section>
//           <section className={classes.header__icons}>
//             {!isMobile && <>{headerIcons}</>}
//             {!isMobile && (
//               <div onClick={openCartModal} className={classes.cart}>
//                 <CartSvg
//                   className={cx(isMobile ? classes.cart_icon_mobile : classes.cart_icon_pc)}
//                   width={styleIconCart.width}
//                   height={styleIconCart.height}
//                 />
//                 {!isMobile && <CartHeaderIcon />}

//                 <div className={classes.tooltipText}>Кошик</div>
//               </div>
//             )}
//           </section>
//         </Container>
//       </div>
//       <MainNav categories={categories} showMainNav={isVisible} />
//       <CartModal isOpen={cartOpen} />
//       {shouldShowMobileMenu && (
//         <SideMenu
//           isOpen={sideMenuOpen}
//           isDefault={sideMenuDefault}
//           categories={categories}
//           toggleCategories={toggleCategories}
//           openingCategoriesIsButton={openingCategoriesIsButton}
//           toggleAuthModal={toggleAuthModal}
//           toggleConfirmed={toggleConfirmed}
//           toggleContactUs={toggleContactUs}
//           toggleSideMenu={toggleSideMenu}
//           modalsState={modalsState}
//           openAuth={openAuth}
//           openCartModal={openCartModal}
//         />
//       )}
//       {!user && (
//         <IntervalShow
//           intervalInSecond={1200}
//           intervalKey="banner"
//           showTimeInSecond={30}
//           outAnimationClassName={animations['fade-out']}
//           outAnimationDuration={1}
//           className={classes['header__firstDiscountMessageContainer']}
//           targetParentContainer={isMobile ? document.body : topbarSwitchContainerRef.current}
//           Component={DiscountAlert}
//           isUserCanClose={true}
//           closeButtonInAnimation={animations['fade-in']}
//           onClick={() => setOpenAuthModal(true)}
//         />
//       )}
//       {isOpenAuthModal && (
//         <AuthModal
//           isOpen={isOpenAuthModal}
//           toggle={() => setOpenAuthModal((prev) => !prev)}
//           toggleConfirmed={toggleConfirmed}
//           activeTab={EAuthTabs.register}
//           fastOrder={false}
//         />
//       )}
//       {isConfirmedModalShow && (
//         <ConfirmedUserModal
//           confirmedModal={isConfirmedModalShow}
//           toggleConfirmed={toggleConfirmed}
//         />
//       )}
//     </header>
//   );
// };

// import css from "./AboutUsPage.module.css";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import aboutUsDesctop from "../../assets/images/aboutUsDesctop.png";
// import aboutUsTablet from "../../assets/images/aboutUsTablet.png";
// import aboutUsMobile from "../../assets/images/aboutUsMobile.png";

// export default function AboutUsPage() {
//   const { t } = useTranslation();
//   const [showVideo, setShowVideo] = useState(false);

//   useEffect(() => {
//     setShowVideo(true);
//   }, []);

//   return (
//     <section className={css.container}>
//       <section className={css.background}>
//         <section className={css.card}>
//           <figure className={css.cardTopImages}>
//             <picture>
//               {/* Mobile */}
//               <source media="(max-width: 699px)" srcSet={aboutUsMobile} />

//               {/* Tablet */}
//               <source media="(max-width: 1099px)" srcSet={aboutUsTablet} />

//               {/* Desktop */}
//               <img
//                 className={css.bigImagesTop}
//                 src={aboutUsDesctop}
//                 alt="About us"
//               />
//             </picture>
//           </figure>
//           <ul className={css.usContent}>
//             <li className={css.carttextUs}>
//               <strong>{t("aboutus.carttextUsTop")}</strong>
//             </li>
//             <li className={css.carttextUs}>
//               <strong>{t("aboutus.carttextUsSecond")}</strong>
//             </li>
//             <li className={css.carttextUs}>
//               <strong>{t("aboutus.carttextUsMidle")}</strong>
//             </li>
//             <li className={css.carttextUs}>
//               <strong>{t("aboutus.carttextUsBotton")}</strong>
//             </li>
//           </ul>
//         </section>
//       </section>
//       <section className={css.background}>
//         <section className={css.sectionVideo}>
//           {showVideo && (
//             <div className={css.videoOverlay}>
//               <video
//                 src="/video/videAboutUs.MP4"
//                 autoPlay
//                 muted
//                 playsInline
//                 onEnded={() => setShowVideo(false)}
//                 className={css.video}
//               />
//             </div>
//           )}
//         </section>
//       </section>
//     </section>
//   );
// }
/* === AboutUsPage CONTAINER === */
// .container {
//   width: 100%;
//   padding-top: clamp(40px, 6vw, 120px);
// }

// .background {
//   width: 100%;
//   background: #222;
//   display: flex;
//   justify-content: center;
// }

// /* головний блок */
// .card {
//   width: 100%;
//   max-width: 1440px;

//   display: grid;
//   grid-template-columns: 260px 1fr 420px;
//   align-items: center;

//   gap: 60px;
//   padding: 0 40px;
// }

// /* жовта сітка */
// .imgCard {
//   width: 260px;
// }

// .images {
//   width: 100%;
//   height: auto;
//   display: block;
// }

// /* текст */
// .usContent {
//   list-style: none;
//   padding: 0;
//   margin: 0;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   text-align: center;
//   align-items: center;
//   gap: 24px;

//   max-width: 800px;
// }

// .carttextUs strong {
//   color: white;
//   font-family: Montserrat;
//   font-weight: 500;
//   font-size: clamp(16px, 1.1vw, 20px);
//   line-height: 1.5;
// }

// /* сітка картинок */

// .ulCard {
//   list-style: none;
//   padding: 0;
//   margin: 0;

//   display: flex;
//   flex-direction: column;
//   gap: 16px;
// }

// .topBlokImgCard,
// .bottomBlokImgCard {
//   display: flex;
//   gap: 16px;
// }

// .liImgCard {
//   width: 200px;
// }

// .liImgCard img {
//   width: 100%;
//   border-radius: 4px;
// }
// .card {
//   margin-top: 20px;
//   margin-bottom: 20px;
//   width: 1550px;
//   max-width: 1600px;
//   grid-template-columns: 300px 1fr 460px;
//   gap: 80px;
// }

// .liImgCard {
//   margin-top: 5px;
//   width: 400px;
// }

// .titleHaria {
//   padding: 2px;
//   margin-top: 5px;
//   width: 400px;
// }

// /* ================= */
// /* 1440+ екрани */
// /* ================= */

// @media (min-width: 1440px) {
//   .background {
//     margin-top: 30px;
//     width: 100%;
//     background: #222;
//     display: flex;
//     justify-content: center;
//   }
//   .card {
//     margin-top: 20px;
//     margin-bottom: 20px;
//     width: 1550px;
//     max-width: 1600px;
//     grid-template-columns: 300px 1fr 460px;
//     gap: 80px;
//   }

//   .liImgCard {
//     margin-top: 5px;
//     width: 400px;
//   }
//   .usContent {
//     list-style: none;
//     padding: 0;
//     margin: 0;

//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     text-align: center;
//     align-items: center;
//     gap: 24px;

//     max-width: 600px;
//   }
//   .titleHaria {
//     padding: 2px;
//     margin-top: 5px;
//     width: 400px;
//   }
// }

// /* ================= */
// /* планшет */
// /* ================= */

// @media (max-width: 1100px) {
//   .card {
//     grid-template-columns: 1fr;
//     text-align: center;
//     justify-items: center;
//     gap: 40px;
//   }

//   .usContent {
//     align-items: center;
//   }
// }

// /* ================= */
// /* мобілка */
// /* ================= */

// @media (max-width: 600px) {
//   .topBlokImgCard,
//   .bottomBlokImgCard {
//     justify-content: center;
//   }

//   .liImgCard {
//     width: 140px;
//   }
// }

//  {/* жовта сітка */}
//           <figure className={css.imgCardGrid}>
//             <img
//               className={css.imagesGrid}
//               src={backgroundGrid}
//               alt="backgroundGrid"
//             />
//           </figure>
// гарантовано все ставе по центру і вертикально!!!
// .container {
//   display: flex;
//   flex-direction: column; /* елементи один під одним */
//   justify-content: center; /* центр по вертикалі */
//   align-items: center; /* центр по горизонталі */
//   text-align: center; /* центрує текст */
//     width: 100 %;
//     min-height: 100vh; /* займає висоту екрана */
// }

//
// //
// .page {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   gap: 56px;
//   padding: 120px 0 80px;
//   background-color: #f5f1e8;
// }

// /* HERO */
// .hero {
//   max-width: 1100px;
//   padding: 0 24px;
//   display: flex;
//   flex-direction: column;
//   gap: 16px; /* компактніше */
// }

// .hero h1 {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   font-size: 48px;
//   font-weight: 700;
// }

// .hero p {
//   font-family: Montserrat;
//   font-weight: 500;
//   font-style: SemiBold;
//   font-size: 38px;
//   line-height: 100%;
//   letter-spacing: 0%;
//   color: #090909;
//   max-width: 600px;
// }

// .heroActionsBlock {
//   width: 300px;
//   height: 50px;
//   margin: 5px;
//   padding: 5px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   gap: 16px;
//   /* flex-wrap: wrap; */
// }
// .heroActions {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   gap: 16px;
//   flex-wrap: wrap;
// }
// .heroActionsDownload {
//   width: 100px;
//   height: 50px;
//   margin-top: -30px;
//   margin-left: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   gap: 16px;
//   flex-wrap: wrap;
//   /* background: #bcc815; */
// }

// .primaryBtn {
//   padding: 12px 30px;
//   border-radius: 30px;
//   background: #bcc815;
//   color: #fff;
//   font-weight: 600;
// }

// /* ===== SECTIONS ===== */
// .section {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   text-align: left;
//   align-items: start;
//   gap: 12px; /* було 16px */
// }

// /* ЖОВТА ЛІНІЯ — ПРИТИСНУТА ДО КРАЮ */
// .titleParagraf {
//   width: 100%;
//   border-left: 4px solid #fbb007;
//   padding-left: 16px;
//   font-size: 40px;
//   font-weight: 700;
//   margin: 0;
// }

// /* ВНУТРІШНІЙ КОНТЕНТ */
// .section > p,
// .section > ul,
// .section > .contacts,
// .section > .docActions {
//   font-family: Montserrat;
//   font-weight: 400;
//   font-style: SemiBold;
//   font-size: 24px;
//   line-height: 100%;
//   letter-spacing: 0%;
//   color: #090909;
//   /* max-width: 800px; */
//   max-width: 1100px;
//   padding: 0 24px;
// }

// /* TEXT */
// .section p {
//   font-family: Montserrat;
//   font-weight: 400;
//   font-style: SemiBold;
//   font-size: 24px;
//   line-height: 100%;
//   letter-spacing: 0%;
//   color: #090909;
//   max-width: 800px;
//   margin-top: 4px; /* компактніше */
// }

// /* LISTS */
// .list {
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
// }

// .note {
//   font-style: italic;
//   opacity: 0.8;
//   margin-top: 6px;
// }

// /* DOCUMENTS */
// .docActions {
//   display: flex;
//   gap: 16px;
//   flex-wrap: wrap;
// }

// /* CONTACTS */
// .contacts {
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// }

// /* ===== TABLET ===== */
// @media (max-width: 1024px) {
//   .hero h1 {
//     font-size: 40px;
//   }

//   .titleParagraf {
//     font-size: 32px;
//   }
//   .titleHaria {
//     width: 100%;
//   }
//   .imagesHaria {
//     width: 500px;
//     height: 80px;
//   }
// }

// /* ===== MOBILE ===== */
// @media (max-width: 600px) {
//   .page {
//     padding: 100px 0 60px;
//     gap: 42px;
//   }

//   .hero {
//     padding: 0 16px;
//   }

//   .hero h1 {
//     font-size: 32px;
//   }

//   .hero p {
//     font-size: 18px;
//   }

//   .titleParagraf {
//     font-size: 26px;
//     padding-left: 12px;
//   }

//   .section > p,
//   .section > ul,
//   .section > .contacts,
//   .section > .docActions {
//     padding: 0 16px;
//   }
//   .titleHaria {
//     width: 100%;
//   }
//   .imagesHaria {
//     width: 400px;
//     height: 60px;
//   }
// }
