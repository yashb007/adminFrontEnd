import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from "./Login/Login.js"
import Home from "./Common/Home.js"
import Dashboard from "./Common/Dashboard.js"
import UsersList from './Components/UserMaster/UsersList.js';
import AddUser from './Components/UserMaster/AddUser.js';
import UsersWalletDetails from './Components/UserWise/UsersWalletDetails.js';
import BannerList from "./Components/BannerMaster/BannerList"
import BannerAddTab from "./Components/BannerMaster/BannerAddTab"
import PackageList from './Components/PackageMaster/PackageList.js';
import PackageAddTab from './Components/PackageMaster/PackageAddTab.js';
import TopUpList from "./Components/TopUpMaster/TopUpList"
import TopUpAddTab from "./Components/TopUpMaster/TopUpAddTab"
import CategoryList from "./Components/CategoryMaster/CategoryList";
import CategoryAddTab from "./Components/CategoryMaster/CategoryAddTab"
import LanguageList from "./Components/LanguageMaster/LanguageList";
import LanguageAddTab from './Components/LanguageMaster/LanguageAddTab.js';

import CountryList from "./Components/LocationMaster/CountryMaster/CountryList";
import CountryAddTab from './Components/LocationMaster/CountryMaster/CountryAddTab';
import GovernorateList from './Components/LocationMaster/GovernorateMaster/GovernorateList.js';
import GovernorateAddTab from './Components/LocationMaster/GovernorateMaster/GovernorateAddTab.js';
import AreaList from './Components/LocationMaster/AreaMaster/AreaList';
import AreaAddTab from './Components/LocationMaster/AreaMaster/AreaAddTab.js';
import GallaryList from './Components/GallaryMaster/GallaryList.js';
import GallaryAddTab from './Components/GallaryMaster/GallaryAddTab.js';
import GallaryView from './Components/GallaryMaster/GallaryView.js';
import TermsConditions from './Components/Terms-ConditionsMaster/TermsConditions';
import PrivacyPolicy from './Components/PrivacyPolicyMaster/PrivacyPolicy';

import SellerList from './Components/SellerMaster/UsersList';
import SellerAdd from './Components/SellerMaster/AddUser';

import UserWisePackage from './Components/UserWise/Package/PackageList';
import PackageOrderView from './Components/UserWise/Package/PackageOrderView';

import PostList from './Components/Post/PostList';
import postAddTab from './Components/Post/PostAddTab';
import ChatList from './Components/Chat/Chat'
import Bidding from './Components/Post/Bidding';
import OrderList from './Components/Orders/OrderList.js';
import OrderView from './Components/Orders/OrderView.js';
import PostGallaryView from './Components/Post/PostGallaryView.js';
import OfferList from './Components/OfferMaster/OfferList.js';
import OfferAddTab from './Components/OfferMaster/OfferAddTab.js';
import ProductList from './Components/ProductMaster/ProductList.js';
import ProductGallaryView from './Components/ProductMaster/ProductGallaryView.js';
import ProductAddTab from './Components/ProductMaster/ProductAddTab';
import BrandList from './Components/BrandMaster/BrandList.js';
import BrandAddTab from './Components/BrandMaster/BrandAddTab.js';

import AddressList from './Components/LocationMaster/AddressMaster/AddressList';
import AddressAddTab from './Components/LocationMaster/AddressMaster/AddressAddTab';

class Routes extends Component {
    render() {
        return (
            <Router baseName={"/"}>
                {
                    localStorage.getItem("soldm_ad_log") !== "true"
                        ?
                        <Route exact path={"/"} component={Login} />
                        :
                        <Home>
                            <Route exact path={"/"} component={Dashboard} />
                            <Route exact path={"/users"} component={UsersList} />
                            <Route exact path={"/users/add/:user_id?"} component={AddUser} />
                            <Route exact path={"/users/wallet/:user_id"} component={UsersWalletDetails} />
                            <Route exact path={"/users/orders/:user_id"} component={OrderList} />
                            <Route exact path={"/address/:user_id"} component={AddressList} />
                            <Route exact path={"/address/add/:user_id"} component={AddressAddTab} />
                            <Route exact path={"/address/edit/:address_id/:user_id"} component={AddressAddTab} />

                            <Route exact path={"/banner"} component={BannerList} />
                            <Route exact path={"/banner/add"} component={BannerAddTab} />
                            <Route exact path={"/banner/edit/:banner_id"} component={BannerAddTab} />

                            <Route exact path={"/package"} component={PackageList} />
                            <Route exact path={"/package/add"} component={PackageAddTab} />
                            <Route exact path={"/package/edit/:package_id"} component={PackageAddTab} />
                            <Route exact path={"/userpackage/:user_id"} component={UserWisePackage} />
                            <Route exact path={"/packageOrder/:package_id"} component={PackageOrderView} />


                            <Route exact path={"/topup"} component={TopUpList} />
                            <Route exact path={"/topup/add"} component={TopUpAddTab} />
                            <Route exact path={"/topup/edit/:topup_id"} component={TopUpAddTab} />

                            <Route exact path={"/category"} component={CategoryList} />
                            <Route exact path={"/category/add"} component={CategoryAddTab} />
                            <Route exact path={"/category/edit/:category_id"} component={CategoryAddTab} />

                            <Route exact path={"/language"} component={LanguageList} />
                            <Route exact path={"/language/add"} component={LanguageAddTab} />
                            <Route exact path={"/language/edit/:language_id"} component={LanguageAddTab} />

                            <Route exact path={"/country"} component={CountryList} />
                            <Route exact path={"/country/add"} component={CountryAddTab} />
                            <Route exact path={"/country/edit/:country_id"} component={CountryAddTab} />

                            <Route exact path={"/governorate"} component={GovernorateList} />
                            <Route exact path={"/governorate/add"} component={GovernorateAddTab} />
                            <Route exact path={"/governorate/edit/:governorate_id"} component={GovernorateAddTab} />

                            <Route exact path={"/area"} component={AreaList} />
                            <Route exact path={"/area/add"} component={AreaAddTab} />
                            <Route exact path={"/area/edit/:area_id"} component={AreaAddTab} />

                            <Route exact path={"/gallary"} component={GallaryList} />
                            <Route exact path={"/gallary/add"} component={GallaryAddTab} />
                            <Route exact path={"/gallary/edit/:gallary_id"} component={GallaryAddTab} />
                            <Route exact path={"/gallary/view/:gallary_id"} component={GallaryView} />

                            <Route exact path={"/seller"} component={SellerList} />
                            <Route exact path={"/seller/add"} component={SellerAdd} />
                            <Route exact path={"/seller/edit/:user_id"} component={SellerAdd} />

                            <Route exact path={"/post"} component={PostList} />
                            <Route exact path={"/post/add"} component={postAddTab} />
                            <Route exact path={"/post/edit/:post_id"} component={postAddTab} />
                            <Route exact path={"/postbidding/:post_id"} component={Bidding} />
                            <Route exact path={"/post/gallary/:post_id"} component={PostGallaryView} />

                            <Route exact path={"/offer"} component={OfferList} />
                            <Route exact path={"/offer/add"} component={OfferAddTab} />
                            <Route exact path={"/offer/edit/:offer_id"} component={OfferAddTab} />

                            <Route exact path={"/Orders"} component={OrderList} />
                            <Route exact path={"/Orders/view/:order_id"} component={OrderView} />

                            <Route exact path={"/product"} component={ProductList} />
                            <Route exact path={"/product/add"} component={ProductAddTab} />
                            <Route exact path={"/product/edit/:product_id"} component={ProductAddTab} />
                            <Route exact path={"/product/gallary/:product_id"} component={ProductGallaryView} />


                            <Route exact path={"/brand"} component={BrandList} />
                            <Route exact path={"/brand/add"} component={BrandAddTab} />
                            <Route exact path={"/brand/edit/:brand_id"} component={BrandAddTab} />

                            <Route exact path={"/chat"} component={ChatList} />
                            <Route exact path={"/terms"} component={TermsConditions} />
                            <Route exact path={"/privacy-policy"} component={PrivacyPolicy} />


                        </Home>
                }
            </Router>
        );
    }
}

export default Routes;

