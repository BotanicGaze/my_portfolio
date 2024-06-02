class TechDetails {
  final String logo; // String or StaticImageData
  final String? darkModeLogo; // String or StaticImageData
  final String label;
  final String url;

  TechDetails({
    required this.logo,
    this.darkModeLogo,
    required this.label,
    required this.url,
  });
}

class ExperienceDetails {
  final dynamic logo; // String or StaticImageData
  final dynamic darkModeLogo; // String or StaticImageData
  final String logoAlt;
  final String position;
  final bool currentlyWorkHere;
  final DateTime startDate;
  final DateTime? endDate;
  final List<String> summary;

  ExperienceDetails({
    required this.logo,
    this.darkModeLogo,
    required this.logoAlt,
    required this.position,
    this.currentlyWorkHere = false,
    required this.startDate,
    this.endDate,
    required this.summary,
  });
}

class ProjectDetails {
  final String name;
  final String description;
  final String url;
  final dynamic previewImage; // String or StaticImageData
  final List<String> technologies;

  ProjectDetails({
    required this.name,
    required this.description,
    required this.url,
    required this.previewImage,
    required this.technologies,
  });
}

class TestimonialDetails {
  final String personName;
  final dynamic personAvatar; // String or StaticImageData
  final String testimonial;
  final String title;

  TestimonialDetails({
    required this.personName,
    this.personAvatar,
    required this.testimonial,
    required this.title,
  });
}
