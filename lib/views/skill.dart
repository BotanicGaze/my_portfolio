import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:url_launcher/url_launcher.dart';

import '../data.dart';
import '../widgets/tag_widget.dart';

class Skill extends StatelessWidget {
  const Skill({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFF111827),
      width: double.infinity,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 80, vertical: 96),
        child: Column(
          children: [
            const TagWidget(
              label: 'Skills',
            ),
            const SizedBox(height: 16),
            Text(
              "The skills, tools and technologies I am really good at:",
              style: Theme.of(context).textTheme.titleMedium,
            ),
            const SizedBox(height: 48),
            Wrap(
              runSpacing: 48,
              spacing: 48,
              // spacing: MediaQuery.of(context).size.width / 7,
              alignment: WrapAlignment.center,
              runAlignment: WrapAlignment.center,
              children: List.generate(
                technologies.length,
                (index) => InkWell(
                  onTap: () {
                    launchUrl(Uri.parse(technologies[index].url));
                  },
                  child: SizedBox(
                    width: MediaQuery.of(context).size.width / 7,
                    child: Column(
                      children: [
                        SizedBox(
                          width: 64,
                          height: 64,
                          child: SvgPicture.asset(
                            technologies[index].logo,
                          ),
                        ),
                        const SizedBox(height: 16),
                        Text(
                          technologies[index].label,
                          style: Theme.of(context).textTheme.bodyLarge,
                        )
                      ],
                    ),
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
