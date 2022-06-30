export const elements = {
    // Main Landing Page elements
    mainPage: '#page',
    mainPageHeader: '#header',
    mainPageBody: '#columns',
    mainPageFooter: '#footer',

    // CatalogTitleSection
    categoriesTitle: '#block_top_menu',
    tShirtBtn: '#block_top_menu > ul > li:nth-child(3) > a',
    dressesBtn: '.sf-menu > :nth-child(2) > .sf-with-ul',
    womenBtn: '.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]',

    // Catlog Selection
    eveningDressesBtn: '.tree > :nth-child(2) > a',
    summerDressesBtn: '.block_content > .tree > .last > a',
    smallSizeBtn: '#layered_id_attribute_group_1',
    mediumSizeBtn: '#layered_id_attribute_group_2',
    blue: '#layered_id_attribute_group_14',
    beige: '#layered_id_attribute_group_7',
    orange: '#layered_id_attribute_group_13',

    productColourBtn: '#color_14',

    // TShirtLandingPage
    leftColumn: '#left_column',
    centerColumn: '#center_column',
    productList: '#center_column > ul',
    productListImage: '#center_column > ul > li > div > div.left-block',
    productListDescription: '#center_column > ul > li > div > div.right-block',
    productListDescriptionTitle: '#center_column > ul > li > div > div.right-block > h5 > a',
    productListDescriptionAddMoreBtn: '.lnk_view > span',
    productListDescriptionButtonContainer: '.right-block > .button-container',
    productListDescriptionColourContainer: '.color_to_pick_list',
    productListDescriptionAvailabilityContainer: '.available-now',

    // MoreDetailsLandingPage
    productDetailBreadCrumb: '.breadcrumb',
    productDetailImage: '.pb-left-column',
    productDetailDescription: '.pb-center-column',
    productDetailSelection: '.pb-right-column',
    productDetailSelectionPrice: '.our_price_display',
    productDetailSelectionQuantity: '#quantity_wanted_p',
    productDetailSelectionSizeDropdownBtn: '#uniform-group_1',
    productDetailSelectionSizeDropdownValue: '#group_1 > option:nth-child(1)',
    productDetailDesiredSizeSelector:'#group_1',
    productDetailDesiredSizeValue: '#uniform-group_1 > span',
    productDetailSelectionSize: '#attributes > :nth-child(2)',
    productDetailSelectionColour: '#attributes > :nth-child(3)',
    productDetailSelectionAddToCartBtn: '#add_to_cart',
    productDetailSelectionAddToWishlist: '.box-cart-bottom > :nth-child(2)',
    productDetailSelectionAddToCartComponent:'[title="View my shopping cart"]',
    cartValue:'.ajax_cart_no_product',

    // AddedItemConfirmationPopup
    layerCart: '#layer_cart > div.clearfix',
    layerCartProduct: '.layer_cart_product',
    layerCartCart: '.layer_cart_cart',
    closeBtn: '.cross',
    productTitle: '.layer_cart_product > h2',
    productInfo: '.layer_cart_product_info',
    itemCounterText: 'h2 > .ajax_cart_product_txt',
    itemTotalCounter: '#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > span.ajax_cart_quantity',
    totalProducts:'.layer_cart_cart > :nth-child(2)',
    totalShipping:'.layer_cart_cart > :nth-child(3)',
    total: '.layer_cart_cart > :nth-child(4)',
    continueShoppingBtn: '.continue > span',
    proceedToCheckoutBtn: '#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a',

    // ProductToRemove
    component: '#product_4_16_0_0',
    names: 'td.cart_description > p',
    eveningDressDeleteBtn: '#product_4_16_0_0 > .cart_delete',

    // ShoppingCartSummary
    cartSummaryTitle: '#cart_title',
    orderStep: '#order_step',
    orderDetailComponent: '#order-detail-content',
    tShirtQty: '#product_1_3_0_0 > .cart_quantity > .cart_quantity_input',
    tShirtTotalPrice: '#total_product_price_1_3_0',
    summerDressTotalPrice: '#total_product_price_5_25_0',
    addBtn: '#cart_quantity_up_1_3_0_0 > span',
    totalPrice: '#total_price',
};
