'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">marketplace documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-a03d20a6874b7bf220d0406e9f8be3931fe0a0fde4ad42aea60cf67863acaae40bb38942d64ded94bb8bf0b8b3b60f27e8c9c464e468429aa96d6ae1fbe37c70"' : 'data-bs-target="#xs-components-links-module-AppModule-a03d20a6874b7bf220d0406e9f8be3931fe0a0fde4ad42aea60cf67863acaae40bb38942d64ded94bb8bf0b8b3b60f27e8c9c464e468429aa96d6ae1fbe37c70"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a03d20a6874b7bf220d0406e9f8be3931fe0a0fde4ad42aea60cf67863acaae40bb38942d64ded94bb8bf0b8b3b60f27e8c9c464e468429aa96d6ae1fbe37c70"' :
                                            'id="xs-components-links-module-AppModule-a03d20a6874b7bf220d0406e9f8be3931fe0a0fde4ad42aea60cf67863acaae40bb38942d64ded94bb8bf0b8b3b60f27e8c9c464e468429aa96d6ae1fbe37c70"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-a03d20a6874b7bf220d0406e9f8be3931fe0a0fde4ad42aea60cf67863acaae40bb38942d64ded94bb8bf0b8b3b60f27e8c9c464e468429aa96d6ae1fbe37c70"' : 'data-bs-target="#xs-injectables-links-module-AppModule-a03d20a6874b7bf220d0406e9f8be3931fe0a0fde4ad42aea60cf67863acaae40bb38942d64ded94bb8bf0b8b3b60f27e8c9c464e468429aa96d6ae1fbe37c70"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a03d20a6874b7bf220d0406e9f8be3931fe0a0fde4ad42aea60cf67863acaae40bb38942d64ded94bb8bf0b8b3b60f27e8c9c464e468429aa96d6ae1fbe37c70"' :
                                        'id="xs-injectables-links-module-AppModule-a03d20a6874b7bf220d0406e9f8be3931fe0a0fde4ad42aea60cf67863acaae40bb38942d64ded94bb8bf0b8b3b60f27e8c9c464e468429aa96d6ae1fbe37c70"' }>
                                        <li class="link">
                                            <a href="injectables/CompanyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ListingModule.html" data-type="entity-link" >ListingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ListingModule-4678bc8b02770b6cd04f7948db92f783780a204be924f2b37c076dfc144c3dc580907c5f9b217f87d9f06b87eda22245c6918e670fbe8d62da0467a5937b321c"' : 'data-bs-target="#xs-components-links-module-ListingModule-4678bc8b02770b6cd04f7948db92f783780a204be924f2b37c076dfc144c3dc580907c5f9b217f87d9f06b87eda22245c6918e670fbe8d62da0467a5937b321c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListingModule-4678bc8b02770b6cd04f7948db92f783780a204be924f2b37c076dfc144c3dc580907c5f9b217f87d9f06b87eda22245c6918e670fbe8d62da0467a5937b321c"' :
                                            'id="xs-components-links-module-ListingModule-4678bc8b02770b6cd04f7948db92f783780a204be924f2b37c076dfc144c3dc580907c5f9b217f87d9f06b87eda22245c6918e670fbe8d62da0467a5937b321c"' }>
                                            <li class="link">
                                                <a href="components/CreateEditListingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateEditListingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListingDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListingDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MylistingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MylistingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaxonomyModule.html" data-type="entity-link" >TaxonomyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TaxonomyModule-4ad24f89e4b657118942d0d93c4f66e3ea65a333b2c7d1c459a624d7a183f8087d26b6c29068bead0a31779df3e332c64cba4805f51821fcbdfc55d39205f370"' : 'data-bs-target="#xs-components-links-module-TaxonomyModule-4ad24f89e4b657118942d0d93c4f66e3ea65a333b2c7d1c459a624d7a183f8087d26b6c29068bead0a31779df3e332c64cba4805f51821fcbdfc55d39205f370"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TaxonomyModule-4ad24f89e4b657118942d0d93c4f66e3ea65a333b2c7d1c459a624d7a183f8087d26b6c29068bead0a31779df3e332c64cba4805f51821fcbdfc55d39205f370"' :
                                            'id="xs-components-links-module-TaxonomyModule-4ad24f89e4b657118942d0d93c4f66e3ea65a333b2c7d1c459a624d7a183f8087d26b6c29068bead0a31779df3e332c64cba4805f51821fcbdfc55d39205f370"' }>
                                            <li class="link">
                                                <a href="components/TaxonomyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaxonomyComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-TaxonomyModule-4ad24f89e4b657118942d0d93c4f66e3ea65a333b2c7d1c459a624d7a183f8087d26b6c29068bead0a31779df3e332c64cba4805f51821fcbdfc55d39205f370"' : 'data-bs-target="#xs-pipes-links-module-TaxonomyModule-4ad24f89e4b657118942d0d93c4f66e3ea65a333b2c7d1c459a624d7a183f8087d26b6c29068bead0a31779df3e332c64cba4805f51821fcbdfc55d39205f370"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-TaxonomyModule-4ad24f89e4b657118942d0d93c4f66e3ea65a333b2c7d1c459a624d7a183f8087d26b6c29068bead0a31779df3e332c64cba4805f51821fcbdfc55d39205f370"' :
                                            'id="xs-pipes-links-module-TaxonomyModule-4ad24f89e4b657118942d0d93c4f66e3ea65a333b2c7d1c459a624d7a183f8087d26b6c29068bead0a31779df3e332c64cba4805f51821fcbdfc55d39205f370"' }>
                                            <li class="link">
                                                <a href="pipes/OrderByPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderByPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransactionModule.html" data-type="entity-link" >TransactionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TransactionModule-a725ea73e6de96ad3718afa12401297a0187e037456a97c9924c2e516332c22674492f144d4ca131a98ea55728ee5b3f7d5c5a8595226ce51b6b9db12ac701f7"' : 'data-bs-target="#xs-components-links-module-TransactionModule-a725ea73e6de96ad3718afa12401297a0187e037456a97c9924c2e516332c22674492f144d4ca131a98ea55728ee5b3f7d5c5a8595226ce51b6b9db12ac701f7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TransactionModule-a725ea73e6de96ad3718afa12401297a0187e037456a97c9924c2e516332c22674492f144d4ca131a98ea55728ee5b3f7d5c5a8595226ce51b6b9db12ac701f7"' :
                                            'id="xs-components-links-module-TransactionModule-a725ea73e6de96ad3718afa12401297a0187e037456a97c9924c2e516332c22674492f144d4ca131a98ea55728ee5b3f7d5c5a8595226ce51b6b9db12ac701f7"' }>
                                            <li class="link">
                                                <a href="components/TransactiondetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactiondetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransactionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-883c756836ac21a3f138155a502c8ad4b61ce2049656f13fe68c252179da3be88f06ddb800e2cedd57304190a1bab8538fdf5b6b07cfc6258be7488fe7d90175"' : 'data-bs-target="#xs-components-links-module-UserModule-883c756836ac21a3f138155a502c8ad4b61ce2049656f13fe68c252179da3be88f06ddb800e2cedd57304190a1bab8538fdf5b6b07cfc6258be7488fe7d90175"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-883c756836ac21a3f138155a502c8ad4b61ce2049656f13fe68c252179da3be88f06ddb800e2cedd57304190a1bab8538fdf5b6b07cfc6258be7488fe7d90175"' :
                                            'id="xs-components-links-module-UserModule-883c756836ac21a3f138155a502c8ad4b61ce2049656f13fe68c252179da3be88f06ddb800e2cedd57304190a1bab8538fdf5b6b07cfc6258be7488fe7d90175"' }>
                                            <li class="link">
                                                <a href="components/ChangePasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-883c756836ac21a3f138155a502c8ad4b61ce2049656f13fe68c252179da3be88f06ddb800e2cedd57304190a1bab8538fdf5b6b07cfc6258be7488fe7d90175"' : 'data-bs-target="#xs-injectables-links-module-UserModule-883c756836ac21a3f138155a502c8ad4b61ce2049656f13fe68c252179da3be88f06ddb800e2cedd57304190a1bab8538fdf5b6b07cfc6258be7488fe7d90175"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-883c756836ac21a3f138155a502c8ad4b61ce2049656f13fe68c252179da3be88f06ddb800e2cedd57304190a1bab8538fdf5b6b07cfc6258be7488fe7d90175"' :
                                        'id="xs-injectables-links-module-UserModule-883c756836ac21a3f138155a502c8ad4b61ce2049656f13fe68c252179da3be88f06ddb800e2cedd57304190a1bab8538fdf5b6b07cfc6258be7488fe7d90175"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/NotFoundComponent.html" data-type="entity-link" >NotFoundComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link" >AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CompanyService.html" data-type="entity-link" >CompanyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DbConnectionService.html" data-type="entity-link" >DbConnectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImageService.html" data-type="entity-link" >ImageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PropertiesService.html" data-type="entity-link" >PropertiesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link" >Message</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Properties.html" data-type="entity-link" >Properties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});