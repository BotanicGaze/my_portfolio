import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:my_portfolio/data.dart';
import 'package:my_portfolio/widgets/tag_widget.dart';

class Experience extends StatelessWidget {
  const Experience({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      // color: const Color(0xFF111827),
      color: Theme.of(context).primaryColor,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 80, vertical: 96),
        child: Column(
          children: [
            const TagWidget(label: "Experience"),
            const SizedBox(height: 16),
            Text(
              "Here is a quick summary of my most recent experiences:",
              style: Theme.of(context).textTheme.titleMedium,
            ),
            const SizedBox(height: 48),
            ...List.generate(
                experiences.length,
                (index) => ExperienceCard(
                      summary: experiences[index].summary,
                      logo: experiences[index].logo,
                      logoAlt: experiences[index].logoAlt,
                      position: experiences[index].position,
                      startDate: experiences[index].startDate,
                      currentlyWorkHere: experiences[index].currentlyWorkHere,
                      endDate: experiences[index].endDate,
                    ))
          ],
        ),
      ),
    );
  }
}

class ExperienceCard extends StatelessWidget {
  final String logo;
  final String? darkModeLogo;
  final String logoAlt;
  final String position;
  final DateTime startDate;
  final DateTime? endDate;
  final bool currentlyWorkHere;
  final List<String> summary;

  const ExperienceCard({
    required this.logo,
    this.darkModeLogo,
    required this.logoAlt,
    required this.position,
    required this.startDate,
    this.endDate,
    required this.currentlyWorkHere,
    required this.summary,
    Key? key,
  }) : super(key: key);

  String calculateDateDifference(DateTime startDate, DateTime endDate) {
    int yearsDifference = endDate.year - startDate.year;
    int monthsDifference = endDate.month - startDate.month;

    // If the end month is earlier in the year than the start month, adjust the year and month
    if (monthsDifference < 0) {
      yearsDifference--;
      monthsDifference += 12;
    }
    return "$yearsDifference year, $monthsDifference months";
  }

  @override
  Widget build(BuildContext context) {
    final dateFormatOptions = DateFormat.yMMMM();

    return Card(
      margin: const EdgeInsets.symmetric(vertical: 16, horizontal: 24),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            Row(
              children: [
                Expanded(
                  flex: 1,
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: SizedBox(
                      width: 102,
                      child: Image.asset(
                        logo,
                        // fit: BoxFit.contain,
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  flex: 2,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        position,
                        style: Theme.of(context).textTheme.titleMedium,
                      ),
                      const SizedBox(height: 8),
                      ...summary.map((sentence) => Padding(
                            padding: const EdgeInsets.symmetric(vertical: 4.0),
                            child: Opacity(
                              opacity: 0.65,
                              child: Text(
                                '• $sentence',
                                style: Theme.of(context).textTheme.bodyMedium,
                              ),
                            ),
                          )),
                    ],
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  flex: 1,
                  child: Column(
                    children: [
                      Text(
                        '${dateFormatOptions.format(startDate)} - ${currentlyWorkHere ? 'Present' : (endDate != null ? dateFormatOptions.format(endDate!) : 'NA')}',
                        textAlign: TextAlign.right,
                        style: const TextStyle(),
                      ),
                      Text(calculateDateDifference(
                          startDate, endDate ?? DateTime.now()))
                    ],
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
