import 'package:flutter/material.dart';
import 'package:lucide_icons_flutter/lucide_icons.dart';
import 'package:my_portfolio/data.dart';
import 'package:my_portfolio/widgets/tag_widget.dart';
import 'package:url_launcher/url_launcher.dart';

class Work extends StatelessWidget {
  const Work({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      // color: Theme.of(context).primaryColor,
      color: const Color(0xFF111827),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 80, vertical: 96),
        child: Column(
          children: [
            const TagWidget(label: "Work"),
            const SizedBox(height: 16),
            Text(
              "Some of the noteworthy projects I have built:",
              style: Theme.of(context).textTheme.titleMedium,
            ),
            const SizedBox(height: 48),
            ...projects.map((e) => ProjectsCard(data: e)).toList()
          ],
        ),
      ),
    );
  }
}

class ProjectsCard extends StatelessWidget {
  const ProjectsCard({super.key, required this.data});
  final ProjectDetails data;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: IntrinsicHeight(
        child: Row(
          children: [
            Expanded(
              flex: 1,
              child: Padding(
                padding: const EdgeInsets.all(48.0),
                child: SizedBox(
                  height: 384,
                  child: Image.asset(
                    data.previewImage,
                    // fit: BoxFit.fill,
                  ),
                ),
              ),
            ),
            Expanded(
              flex: 2,
              child: Padding(
                padding: const EdgeInsets.all(48.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Text(
                      data.name,
                      style: Theme.of(context).textTheme.titleMedium,
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 24.0),
                      child: Text(
                        data.description,
                        style: Theme.of(context).textTheme.bodyMedium,
                      ),
                    ),
                    Wrap(
                      spacing: 16,
                      runSpacing: 16,
                      children: List.generate(
                        data.technologies.length,
                        (index) => Chip(
                          label: Text(
                            data.technologies[index],
                          ),
                          side: const BorderSide(
                              width: 0.5, color: Color(0xFFe5e7eb)),
                          labelStyle: Theme.of(context).textTheme.bodyMedium,
                        ),
                      ),
                    ),
                    const Spacer(),
                    IconButton(
                        onPressed: () {
                          launchUrl(Uri.parse(data.url));
                        },
                        icon: const Icon(LucideIcons.externalLink))
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
