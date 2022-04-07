import {
  Heading,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Article from "../../../components/Article/Article";
import ArticleVideo from "../../../components/Article/ArticleVideo";
import Layout from "../../../components/Layout/Layout";
import userInfo from "../../../constants/info";

const Project2 = () => {
  return (
    <Layout>
      <Head>
        <title>{userInfo.siteTitle} - Animations: Project 2</title>
      </Head>
      <Article title="Project 2: Treasure Chest" date="2022-03-08">
        <Heading size="md">Final Animation:</Heading>
        <ArticleVideo
          size="80vw"
          src="https://www.youtube.com/embed/gCIjtD0HDmc"
        />
        <Heading size="md">Shaded Turn Animation:</Heading>
        <ArticleVideo
          size="80vw"
          src="https://www.youtube.com/embed/c68oIE3Mrt0"
        />
        <Heading size="md">Wireframe Turn Animation:</Heading>
        <ArticleVideo
          size="80vw"
          src="https://www.youtube.com/embed/mTRDoeIe4DY"
        />
        <Spacer />
        <Heading size="md">Reference Images</Heading>
        <SimpleGrid columns={2} spacing={5}>
          <Image
            src="/images/animations/project2/R1.jpg"
            alt="Reference chest front view"
          />
          <Image
            src="/images/animations/project2/R2.jpg"
            alt="Reference chest diagonal front view"
          />
          <Image
            src="/images/animations/project2/R3.jpg"
            alt="Reference chest diagonal back view"
          />
          <Image
            src="/images/animations/project2/R4.jpg"
            alt="Reference chest open view"
          />
        </SimpleGrid>
        <Spacer />
        <Heading size="md">Wireframe Images</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project2/WireFrame1.PNG"
            alt="Wireframe chest front view"
          />
          <Image
            h={64}
            src="/images/animations/project2/WireFrame2.PNG"
            alt="Wireframe chest diagonal front view"
          />
          <Image
            h={64}
            src="/images/animations/project2/WireFrame3.PNG"
            alt="Wireframe chest diagonal back view"
          />
          <Image
            h={64}
            src="/images/animations/project2/WireFrame4.PNG"
            alt="Wireframe chest top view"
          />
          <Image
            h={64}
            src="/images/animations/project2/WireFrame5.PNG"
            alt="Wireframe chest open view"
          />
          <Text justifySelf="start" fontSize="lg">
            The modeling of the chest involved liberal use of the Boolean
            Difference tool, particularly for the top half of the chest. In
            addition, the trapezoidal shape of the top half of the chest was
            made by using the Create Polygon tool to draw a trapezoid, then
            extruding it out. The lion shapes and latch mechanism were too
            complicated to manually model, so a lion knocker model was used in
            place of the lion shape and a lock and key model were used instead
            of the latch design, both found from Sketchfab.
          </Text>
        </SimpleGrid>

        <Spacer />

        <Heading size="md">Smooth Shaded Images</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project2/Smooth2.PNG"
            alt="Smooth shaded chest front view"
          />
          <Image
            h={64}
            src="/images/animations/project2/Smooth3.PNG"
            alt="Smooth shaded chest diagonal front view"
          />
          <Image
            h={64}
            src="/images/animations/project2/Smooth4.PNG"
            alt="Smooth shaded chest diagonal back view"
          />
          <Image
            h={64}
            src="/images/animations/project2/Smooth5.PNG"
            alt="Smooth shaded chest top view"
          />
          <Text justifySelf="end" fontSize="lg">
            Textures were particularly troublesome to apply, as the default
            application of textures stretched the texture out very wide. To fix
            this, the UVs had to be remapped in the UV editor by deleting the
            existing UV, applying a camera-based UV, then cutting and unfolding
            different parts of the shapes so that the checker maps appeared
            evenly on the models. A dark wood texture was used for the wood part
            of the chest, and a rusty metal texture was used for the portruding
            parts of the chest, as I thought the metal would look better than
            just having it be entirely wood.
          </Text>
          <Image
            h={64}
            src="/images/animations/project2/Smooth1.PNG"
            alt="Smooth shaded chest open view"
          />
        </SimpleGrid>

        <Spacer />

        <Heading size="md">Final Product Images</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project2/DoneChest.PNG"
            alt="Finished chest front view"
          />
          <Image
            h={64}
            src="/images/animations/project2/DoneChest2.PNG"
            alt="Finished chest front view"
          />
          <Image
            h={64}
            src="/images/animations/project2/DoneChest3.PNG"
            alt="Finished chest front view"
          />
          <Image
            h={64}
            src="/images/animations/project2/DoneChest4.PNG"
            alt="Finished chest front view"
          />
          <Image
            h={64}
            src="/images/animations/project2/DoneChestBack.PNG"
            alt="Finished chest front view"
          />
          <Image
            h={64}
            src="/images/animations/project2/DoneChestOpen.PNG"
            alt="Finished chest front view"
          />
        </SimpleGrid>
        <Text justifySelf="start" fontSize="lg">
          The chest was placed in a dungeon model found on Sketchfab, with point
          lights manually placed at the torches nearest to the chest to create
          the ambient light. Shadows were also turned on as well. The camera
          Tumble tool allowed for the camera to revolve around the chest during
          the animation.
        </Text>

        <Spacer />

        <Heading size="md">Credits</Heading>
        <Link
          href="https://www.worthpoint.com/worthopedia/vintage-medieval-treasure-chest-533144742"
          isExternal
        >
          Vintage Medieval Treasure Chest images from WorthPoint.
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/iron-lock-230fdd8b48d24afa92789106d828e0bf"
          isExternal
        >
          shedmon from Sketchfab for the lock and key model.
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/lion-door-knocker-36d3c4f4b9454f4d9aaf5aab892586ca"
          isExternal
        >
          matousekfoto from Sketchfab for the lion ornament model.
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/dungeon1-sample-room-43b44305830748d08e9a807006df124e"
          isExternal
        >
          jbnotjeebe from Sketchfab for the dungeon room.
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/gold-coins-67060f2c8b594bd6bd7ec2c6d46a42d7"
          isExternal
        >
          epma from Sketchfab for the gold coins model.
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/falchionkingsfang-2e3a5651ca87442e853cf22e3cf16b66"
          isExternal
        >
          knight_of_the_flame from Sketchfab for the sword (Falchion) model.
        </Link>
        <Link
          href="https://www.deviantart.com/marlborolt/art/Rusty-Metal-TWO-439461466"
          isExternal
        >
          marlborolt for the rusty metal texture.
        </Link>
        <Link
          href="https://free-3dtextureshd.com/download/natural-brown-wood-texture-bpr-material-free-download-background-seamless-high-resolution-4k-hd/"
          isExternal
        >
          Free 3D Textures HD for the wood texture
        </Link>
        <Link
          href="https://serenesforest.net/music/radiant-dawn-game-rip/"
          isExternal
        >
          Music is Unused Map Theme from Fire Emblem: Radiant Dawn by Nintendo,
          ripped by Serenes Forest.
        </Link>
      </Article>
    </Layout>
  );
};
export default Project2;
