import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:lucide_icons_flutter/lucide_icons.dart';
import 'package:my_portfolio/widgets/tag_widget.dart';

const String email = 'chihao10711@gmail.com';
const String phone = '+84 969559834';

class GetInTouch extends StatefulWidget {
  const GetInTouch({super.key});

  @override
  State<GetInTouch> createState() => _GetInTouchState();
}

class _GetInTouchState extends State<GetInTouch> {
  bool isCopied = false;
  String? copiedValueType = '';

  Future<void> handleCopyClick(String text, String type) async {
    try {
      await Clipboard.setData(ClipboardData(text: text));
      ScaffoldMessenger.of(context).clearSnackBars();
      isCopied = true;
      copiedValueType = type;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Copied $type!'),
        ),
      );
      Future.delayed(const Duration(seconds: 1), () {
        isCopied = false;
        copiedValueType = null;
      });
    } catch (error) {
      isCopied = false;
      copiedValueType = null;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Unable to copy!')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      // color: const Color(0xFF111827),
      color: Theme.of(context).primaryColor,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 80, vertical: 96),
        child: Column(
          children: [
            const TagWidget(label: "Get in touch"),
            const SizedBox(height: 16),
            Text(
              "What’s next? Feel free to reach out to me if you're looking for\na developer, have a query, or simply want to connect.",
              style: Theme.of(context).textTheme.titleMedium,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 48),
            Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Icon(LucideIcons.mail, size: 28),
                    const SizedBox(width: 8),
                    const Text(
                      email,
                      style: TextStyle(fontSize: 24),
                    ),
                    IconButton(
                      icon: const Icon(LucideIcons.copy),
                      onPressed: () => handleCopyClick(email, 'email'),
                      tooltip: 'Copy email',
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Icon(LucideIcons.phone, size: 28),
                    const SizedBox(width: 8),
                    const Text(
                      phone,
                      style: TextStyle(fontSize: 24),
                    ),
                    IconButton(
                      icon: const Icon(LucideIcons.copy),
                      onPressed: () =>
                          handleCopyClick(phone.replaceAll(' ', ''), 'phone'),
                      tooltip: 'Copy phone',
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
