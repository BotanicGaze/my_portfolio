import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:my_portfolio/views/get_in_touch.dart';
import 'package:my_portfolio/views/works.dart';
import 'package:scroll_to_index/scroll_to_index.dart';
import 'package:url_launcher/url_launcher.dart';

import 'views/experiences.dart';
import 'views/skill.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return ScreenUtilInit(
      designSize: const Size(1024, 690),
      builder: (context, child) {
        return MaterialApp(
          title: 'Hào Lâm | Mobile Developer',
          debugShowCheckedModeBanner: false,
          theme: ThemeData(
            scaffoldBackgroundColor: const Color(0xFF374151),
            colorScheme: const ColorScheme.dark(),
            useMaterial3: true,
          ),
          home: child,
        );
      },
      child: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final controller = AutoScrollController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // title: const Text("Lâm Chí Hào / Mobile Developer"),
        actions: [
          TextButton(
            onPressed: () {
              controller.scrollToIndex(
                0,
                preferPosition: AutoScrollPosition.begin,
              );
            },
            child: const Text("About"),
          ),
          TextButton(
            onPressed: () {
              controller.scrollToIndex(
                2,
                preferPosition: AutoScrollPosition.begin,
              );
            },
            child: const Text("Skill"),
          ),
          TextButton(
            onPressed: () {
              controller.scrollToIndex(
                3,
                preferPosition: AutoScrollPosition.begin,
              );
            },
            child: const Text("Experience"),
          ),
          TextButton(
            onPressed: () {
              controller.scrollToIndex(
                4,
                preferPosition: AutoScrollPosition.begin,
              );
            },
            child: const Text("Work"),
          ),
          TextButton(
            onPressed: () {
              controller.scrollToIndex(
                5,
                preferPosition: AutoScrollPosition.begin,
              );
            },
            child: const Text("Contact"),
          ),
          ElevatedButton(
            onPressed: () {
              launchUrl(Uri.parse(
                  "https://www.topcv.vn/xem-cv/A1dTVwYBUVQCAQMCDlUGVgRcBlADVwEBAF0EDA1284?ta_source=EditCVInAfterSaveCV"));
            },
            child: const Text("Download"),
          ),
        ],
      ),
      body: ListView(
        controller: controller,
        children: [
          AutoScrollTag(
            index: 0,
            controller: controller,
            key: const ValueKey(0),
            child: const Introduction(),
          ),
          // AutoScrollTag(
          //   index: 1,
          //   controller: controller,
          //   key: const ValueKey(1),
          //   child: const AboutMe(),
          // ),
          AutoScrollTag(
            index: 2,
            controller: controller,
            key: const ValueKey(2),
            child: const Skill(),
          ),
          AutoScrollTag(
            index: 3,
            controller: controller,
            key: const ValueKey(3),
            child: const Experience(),
          ),
          AutoScrollTag(
            index: 4,
            controller: controller,
            key: const ValueKey(4),
            child: const Work(),
          ),
          AutoScrollTag(
            index: 5,
            controller: controller,
            key: const ValueKey(5),
            child: const GetInTouch(),
          ),
        ],
      ),
    );
  }
}

class AboutMe extends StatelessWidget {
  const AboutMe({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFF111827),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 80, vertical: 96),
        child: Column(
          children: [
            const Text("About me"),
            Row(
              children: [
                SizedBox(
                  height: 360,
                  width: 320,
                  child: Stack(
                    children: [
                      Positioned.fill(
                        child: Align(
                          alignment: Alignment.bottomRight,
                          child: Container(
                              width: 280,
                              height: 320,
                              color: const Color(0xFF374151)),
                        ),
                      ),
                      Positioned.fill(
                        child: Align(
                          alignment: Alignment.topLeft,
                          child: Container(
                              width: 280, height: 320, color: Colors.amber),
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(
                  width: 114,
                ),
                const Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text("Curious about me? Here you have it:"),
                      Text(
                          "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me."),
                      Text(
                          "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more."),
                      Text(
                          "I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development."),
                      Text(
                          "When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub."),
                      Text("Finally, some quick bits about me."),
                      Text(
                          "One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉")
                    ],
                  ),
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}

class Introduction extends StatelessWidget {
  const Introduction({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Theme.of(context).primaryColor,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 80, vertical: 96),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "Hi, I’m Chí Hào 👋",
                    style: Theme.of(context)
                        .textTheme
                        .headlineLarge
                        ?.copyWith(fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 32),
                  Text(
                    '''
Greetings, everyone! I'm Lam Chi Hào, a 27-year-old Mid-Level Mobile Developer based in Ho Chi Minh City. With over four years of dedicated experience in the field, I specialize in crafting outstanding digital experiences. My expertise lies in utilizing cutting-edge technologies such as Flutter, Dart, and React Native to deliver fast, accessible, visually captivating, and responsive mobile applications.

Despite my extensive experience, my passion for mobile development burns as brightly as ever. Each project presents a new opportunity for creativity and innovation, driving my ongoing dedication to this dynamic field.
''',
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                  const SizedBox(height: 48),
                  const Row(
                    children: [
                      Icon(Icons.location_on),
                      Text("Ho Chi Minh, Vietnam")
                    ],
                  ),
                  const SizedBox(height: 8),
                  const Row(
                    children: [
                      // Icon(Icons.done_outlined),
                      Text("Available for new projects")
                    ],
                  )
                ],
              ),
            ),
            const SizedBox(width: 180),
            // SizedBox(
            //   height: 360,
            //   width: 320,
            //   child: Stack(
            //     children: [
            //       Positioned.fill(
            //         child: Align(
            //           alignment: Alignment.bottomRight,
            //           child: Container(
            //               width: 280,
            //               height: 320,
            //               color: const Color(0xFF374151)),
            //         ),
            //       ),
            //       Positioned.fill(
            //         child: Align(
            //           alignment: Alignment.topLeft,
            //           child: Container(
            //               width: 280, height: 320, color: Colors.amber),
            //         ),
            //       ),
            //     ],
            //   ),
            // )
          ],
        ),
      ),
    );
  }
}
