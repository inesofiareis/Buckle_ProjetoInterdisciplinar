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
        <!-- Footer -->
        <footer class="page-footer font-small blue pt-4">
            <b-container>
                <b-row>
                    <b-col>
                        <h5 class="text-uppercase">Buckle</h5>
                        <b-col>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </b-col>
                        <b-col>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                            </ul>
                        </b-col>
                    </b-col>
                    <b-col>
                        <div>
                            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                <b-form-group id="input-group-1" label="Email address:" label-for="input-1"
                                    description="We'll never share your email with anyone else.">
                                    <b-form-input id="input-1" v-model="form.email" type="email"
                                        placeholder="Enter email" required></b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                                    <b-form-input id="input-2" v-model="form.name" placeholder="Enter name" required>
                                    </b-form-input>
                                </b-form-group>

                                <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                                    <b-form-select id="input-3" v-model="form.food" :options="foods" required>
                                    </b-form-select>
                                </b-form-group>

                                <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                                    <b-form-checkbox-group v-model="form.checked" id="checkboxes-4"
                                        :aria-describedby="ariaDescribedby">
                                        <b-form-checkbox value="me">Check me out</b-form-checkbox>
                                        <b-form-checkbox value="that">Check that out</b-form-checkbox>
                                    </b-form-checkbox-group>
                                </b-form-group>

                                <b-button type="submit" variant="primary">Submit</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form>
                            <b-card class="mt-3" header="Form Data Result">
                                <pre class="m-0">{{ form }}</pre>
                            </b-card>
                        </div>
                    </b-col>

                </b-row>
            </b-container>
            <!-- Copyright -->
        </footer>
        <!-- Footer -->
    </div>
</template>
