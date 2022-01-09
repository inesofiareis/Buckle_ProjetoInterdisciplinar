<template>
    <div class="generalContainer">
        <div class="filterNavbar">
            <b-nav pills>
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item-dropdown id="my-nav-dropdown" text="Dropdown" toggle-class="nav-link-custom" right>
                    <b-dropdown-item>One</b-dropdown-item>
                    <b-dropdown-item>Two</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Three</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-nav>
        </div>
        <div class="bigPhoto">
            <b-card overlay img-src="https://picsum.photos/900/250/?image=3" img-alt="Card Image" text-variant="white"
                title="Image Overlay" sub-title="Subtitle">
                <b-card-text>
                    Some quick example text to build on the card and make up the bulk of
                    the card's content.
                </b-card-text>
            </b-card>
        </div>

        <div class="adsContainer">
            <b-container class="bv-example-row">
                <b-row>
                    <b-col>
                        <div>
                            <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image"
                                img-top tag="article" style="max-width: 20rem" class="mb-2">
                                    <b-card-text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </b-card-text>
                            </b-card>
                        </div>
                    </b-col>
                    <b-col>
                        <div>
                            <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image"
                                img-top tag="article" style="max-width: 20rem" class="mb-2">
                                    <b-card-text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </b-card-text>
                            </b-card>
                            
                        </div>
                    </b-col>
                    <b-col>
                        <div>
                            <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image"
                                img-top tag="article" style="max-width: 20rem" class="mb-2">
                                    <b-card-text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </b-card-text>
                            </b-card>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div>
                            <b-card title="Card Title" img-src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" img-alt="Image"
                                img-top tag="article" style="max-width: 20rem" class="mb-2">
                                    <b-card-text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </b-card-text>
                            </b-card>
                        </div>
                    </b-col>
                    <b-col>
                        <div>
                            <b-card title="Irene Costa de Fotografia" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image"
                                img-top tag="article" style="max-width: 20rem" class="mb-2">
                                    <b-card-text>
                                        Tiro fotografias de cenários para qualquer um de vós!
                                    </b-card-text>
                            </b-card>
                        </div>
                    </b-col>
                    <b-col>
                        <div>
                            <b-card title="Daniel Freitas de TSIW" img-src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" img-alt="Image"
                                img-top tag="article" style="max-width: 20rem" class="mb-2">
                                    <b-card-text>
                                        Sou capaz de criar websites para quem precisar.
                                    </b-card-text>
                            </b-card>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <div class="showAds">
            <b-button>Carregar Mais</b-button>
        </div>
        
    </div>
</template>
