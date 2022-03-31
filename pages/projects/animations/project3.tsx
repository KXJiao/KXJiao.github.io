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

const Project3 = () => {
  return (
    <Layout>
      <Head>
        <title>{userInfo.siteTitle} - Animations: Project3</title>
      </Head>
      <Article title="Project 3: Bouncy Ball?" date="2022-03-24">
        <Heading size="md">Final Animation:</Heading>
        <ArticleVideo
          size="80vw"
          src="https://www.youtube.com/embed/po36m77X77A"
        />

        <Spacer />
        <Heading size="md">Storyboard</Heading>
        <Image
          h={800}
          src="/images/animations/project3/storyboard.png"
          alt="Bouncing Ball animation storyboard"
        />

        <Spacer />

        <Heading size="md">Principles</Heading>
        <Heading size="sm">Squash and Stretch</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project3/squash.png"
            alt="Squash and Stretch"
          />
          <Text justifySelf="start" fontSize="lg">
            Used on several occasions with the ball bird, most notably when it
            bounces at the end of the animation.
          </Text>
        </SimpleGrid>

        <Heading size="sm">Anticipation</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project3/anticipation.png"
            alt="Anticipation"
          />
          <Text justifySelf="start" fontSize="lg">
            Used in conjunction with squash and stretch when the bird is jumping
            and when the bird is exclaiming at the other bird's skills.
          </Text>
        </SimpleGrid>

        <Heading size="sm">Staging</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project3/staging.png"
            alt="Staging"
          />
          <Text justifySelf="start" fontSize="lg">
            Used mostly to draw attention to the primary character of the frame,
            with instances such as the camera angle when the ball bird is
            watching the other bird doing a skate trick, or when the ball bird
            is far when it is flying quickly, or close when it is realizing its
            lack of flight.
          </Text>
        </SimpleGrid>

        <Heading size="sm">Pose to pose</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project3/pose.png"
            alt="Pose to pose"
          />
          <Text justifySelf="start" fontSize="lg">
            The vast majority of animations were made pose to pose, especially
            all the ramp skating animations.
          </Text>
        </SimpleGrid>

        <Heading size="sm">Slow in and slow out</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project3/slow.png"
            alt="Slow in and slow out"
          />
          <Text justifySelf="start" fontSize="lg">
            Most gravity related actions involved slow in and slow out,
            particularly for when the ball bird is flying high into the air,
            then falling again.
          </Text>
        </SimpleGrid>

        <Heading size="sm">Arcs</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project3/squash.png"
            alt="Arcs"
          />
          <Text justifySelf="start" fontSize="lg">
            Ramps are arc shaped so all the skate animations count right?
            Otherwise, when the ball bird is jumping onto its skateboard, it
            moves in an arc.
          </Text>
        </SimpleGrid>

        <Heading size="sm">Exaggeration</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project3/exaggeration.png"
            alt="Exaggeration"
          />
          <Text justifySelf="start" fontSize="lg">
            These skater birds are most definitely not following the laws of
            physics.
          </Text>
        </SimpleGrid>

        <Heading size="sm">Appeal</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project3/appeal.png"
            alt="Appeal"
          />
          <Text justifySelf="start" fontSize="lg">
            I may be biased, but I believe our characters have a certain appeal.
          </Text>
        </SimpleGrid>

        <Spacer />

        <Heading size="md">My Inspiration</Heading>
        <Text justifySelf="start" fontSize="lg">
          Two serendipitous events led to my creating of this animation. First:
          I saw a post online of an extremely round bird, quite literally ball
          shaped, making a ball shaped bird a perfect candidate for the ball
          bouncing animation. Second, I was playing a little bit of a computer
          game called SkateBIRD, which involves various fashionably dressed
          birds who fly high on skateboards. With these two pieces put together,
          the perfect animation idea came to me, thus bringing to life what you
          have seen above.
        </Text>

        <Spacer />
        <Heading size="md">Challenges</Heading>
        <Text justifySelf="start" fontSize="lg">
          This project's theme was overambition, as I planned an overelaborate
          animation rendered using Arnold. My hopes and dreams began fading 20
          minutes into rendering the first frame of nearly 2000 frames, with the
          realization dawning on me that my computer physically could not handle
          the Arnold renderer. Still, I stubbornly pushed onwards, until four
          hours and several force-shutdowns of my computer later, I finally
          reached the breaking point of my sanity. I was a fool from the
          beginning to even consider abandoning the old trusty, Playblast, and
          in the end, I came crawling back to it.
        </Text>
        <Spacer />

        <Heading size="md">Credits</Heading>
        <Link
          href="https://sketchfab.com/3d-models/mineral-wells-skate-park-736e8e4e2456469fa9298d14bd7e3960"
          isExternal
        >
          Mineral Wells Skatepark from Sketchfab, by andrew
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/african-grey-parrot-6f729a4cb4db425599aa79257cc17c98"
          isExternal
        >
          African Grey Parrot from Sketchfab, by Gert-Jan van den Boom
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/sulphur-crested-cockatoo-18fca4e421094c789c63cd78565e38b6"
          isExternal
        >
          Sulfur-Crested Cockatoo from Sketchfab, by AlexGiardiniere
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/seagull-dd79fddb754f47caa3145e7d184e3e58"
          isExternal
        >
          Seagull from Sketchfab, by Bwinji Shamutete
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/pigeon-3-4383b3f88d9646c7b2f336266eaad947"
          isExternal
        >
          Pigeon 3 from Sketchfab, by tomkranis
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/little-blue-penguin-korora-8a58020139cf43bc821bfdfa01e13208"
          isExternal
        >
          Little Blue Penguin / Kororā from Sketchfab, by Auckland Museum
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/chicken-98830a78e8c54354a7fbe5ca8346fbf9"
          isExternal
        >
          Chicken from Sketchfab, by pooiloui2
        </Link>
        <Link href="https://ffxiv.gamerescape.com/wiki/Dodo_(Mount)" isExternal>
          Dodo from Final Fantasy XIV, Square Enix
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/neck-tie-8b5f9940ce764f99b9f02646976f16ae"
          isExternal
        >
          Neck Tie from Sketchfab, by neutralize
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/gangster-hats-ef901c307a5c4ed89cd7ef900d3c7f4c"
          isExternal
        >
          Gangster Hats from Sketchfab, by Michal Cavrnoch
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/aviator-sunglasses-00d1cb5aa82745228a3b764c97f867de"
          isExternal
        >
          Aviator Sunglasses from Sketchfab, by Kimppo
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/skateboard-f1b9b8d4cc524fb891f972fba2351f44"
          isExternal
        >
          Skateboard from Sketchfab, by Microsoft
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/victorian-abigail-hat-e4bde388a33f405a9d5799a77c37cc3a"
          isExternal
        >
          Victorian Abigail Hat from Sketchfab, by Tijerín Art Studio
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/baseball-hat-d2663d7899c04e73a43cc34ec3e14ee0"
          isExternal
        >
          Baseball hat from Sketchfab, by Tactical_Gamer
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/helmet-4aaee1ac11ae419a935e4ced4f191428"
          isExternal
        >
          Helmet from Sketchfab, by Oksana3D
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/shutter-shades-75e94f2c14b740e081ded0e4e60e0a94"
          isExternal
        >
          Shutter Shades from Sketchfab, by Microsoft
        </Link>
        <Link href="https://polyhaven.com/a/noon_grass" isExternal>
          Noon Grass HDRI from Poly Haven
        </Link>
        <Link href="https://www.youtube.com/watch?v=rDbGdc7L-qA" isExternal>
          Flock of Starlings from Youtube
        </Link>
        <Link href="https://www.youtube.com/watch?v=4DKw5wheGQQ" isExternal>
          ASMR | Skate park sounds from Youtube
        </Link>
        <Link href="https://www.youtube.com/watch?v=toexFBZmYqY" isExternal>
          ASMR Skateboarding Kick Push Ride- 1 Hour 1080p HD Tingle Sounds Sleep
          Relax Study (NO TALKING) from Youtube
        </Link>
        <Link href="https://archive.org/details/BudgieSounds/" isExternal>
          Budgie Sounds from Internet Archive
        </Link>
        <Link href="https://www.youtube.com/watch?v=SHl7tvfY9Fs" isExternal>
          Skateboard Ollie Sound Effect from Youtube
        </Link>
        <Link href="https://www.youtube.com/watch?v=ZJ-pxThGrmo" isExternal>
          BOOMERANG SOUND EFFECT | Swing | Swoosh| Thrown from Youtube
        </Link>
        <Link href="https://www.youtube.com/watch?v=iew9op9aPLQ" isExternal>
          Cartoon Boing Sound Effect from Youtube
        </Link>
        <Link href="https://www.youtube.com/watch?v=y8OtzJtp-EM" isExternal>
          Immigrant Song (Remaster) by Led Zeppelin from Youtube
        </Link>
        <Link href="https://www.youtube.com/watch?v=HDRVzwNkV20" isExternal>
          Whoosh Sound Effects from Youtube
        </Link>
        <Link href="https://www.youtube.com/watch?v=sivqrrbfZWI" isExternal>
          Cartoon Slow Rise Sound Effect from Youtube
        </Link>
        <Link href="https://www.youtube.com/watch?v=XFirF_bFHVg" isExternal>
          goofy ahh sounds from Youtube
        </Link>
        <Link href="https://www.youtube.com/watch?v=Qgx-WOn8CDA" isExternal>
          cartoon fall (sound effect) from Youtube
        </Link>
        <Link href="https://www.youtube.com/watch?v=Ag1o3koTLWM" isExternal>
          Curb Your Enthusiasm Theme from Youtube
        </Link>
        <Link href="https://www.youtube.com/watch?v=gvBoUDiMkJY" isExternal>
          Angry Budgie from Youtube
        </Link>
        <Link href="https://www.youtube.com/watch?v=Ub_GUGGUmF4" isExternal>
          Cartoon Impacts Sound Effects from Youtube
        </Link>
        <Link href="https://www.youtube.com/watch?v=lUVQz6_-vxc" isExternal>
          Parrot: What the F**K from Youtube
        </Link>
      </Article>
    </Layout>
  );
};
export default Project3;
