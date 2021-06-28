### INSPIRATIONAL QUOTE GENERATOR

This is a simple-to-use, randomized, template-based inspirational quote generator. Using 6000+ nouns in a word file, and leveraging random verbs and adjectives from the Whimsy library, along with smart pluralization from the Pluralize library, fake attributions derived from the Faker library, image-saving from html-to-image library, and background images gathered from Lorem Picsum, this app fills in pre-selected templates created from popular inspirational quotes and creates the popular inspirational quote image macro.

The main intent of this app was to have fun! The follow-up intents were to:

1. Add new features and expand upon existing ones while the app was in production.
2. Work with some new libraries (some of which are somewhat outdated or lack especially clear documentation).
3. Put forward a minimalist interface with a straight-forward user experience.

A side-effect of this project (or, perhaps, an extension of the main intent) was the creation of an Instagram account to advertise the site and showcase what it can create: [inspiratiobot](https://www.instagram.com/inspiratiobot/).

The flow is simple: When a user starts, a blank image will appear along with a number of buttons. The user can click the image to change the image. The user can click any of the buttons to load a template, which will load with all randomizations. If the user likes that template, they can keep pressing the button (which is now yellow with a reload symbol), or they can select a new one. A user can also press the randomize button to change the background image and randomly select a template. Once satisfied, the user can save the image.

This app was created using React, javascript, html, css, and the above mentioned libraries.

[GitHub](https://github.com/rbannal86/InspirationalQuoteGenerator)

[LiveSite](https://inspiratiobot.com)

Future Plans:

1. More templates
2. Replacing Whimsy with custom verb and adjective lists
3. Google analytics integration

### Building with Docker
This section assumes you've already installed and are somewhat familiare with Docker.

#### Build the Container
To build the container from the application root, simply run the following command. The `-t` (for `tag`) is optional, but can help you remember what the image is for when running `docker images`.
```
docker build -t iqg/my-branch:latest .
```

#### Run the Container
To run the container, specify the image you want and set the `--network` flag. This tells docker to share the host's (your computer's) network with the container.
```
docker run --network=host iqg/my-branch:latest
```

Note: this will start the container and "take over" your terminal. To kill the process, you can run `docker ps`, find the image id, then `docker kill <id>` in a separate terminal.
