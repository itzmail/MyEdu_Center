import 'package:english_words/english_words.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    final wordPair = WordPair.random();
    return MaterialApp(
      title: 'Stratup name Generator',
      home: Scaffold(
        appBar: AppBar(
          title: const Text(
            'Welcome to Flutter',
            style: TextStyle(fontWeight: FontWeight.bold),
          ),
        ),
        body: Center(child: RandomWords()),
      ),
    );
  }
}

class RandomWords extends StatefulWidget {
  const RandomWords({Key? key}) : super(key: key);

  @override
  State<RandomWords> createState() => _RandomWordsState();
}

class _RandomWordsState extends State<RandomWords> {
  @override
  Widget build(BuildContext context) {
    final wordPair = WordPair.random();
    final _suggestions = <WordPair>[];
    final _biggerFont = const TextStyle(fontSize: 18);
    return ListView.builder(
        padding: const EdgeInsets.all(16.0),
        itemBuilder: (context, i) {
          if (i.isOdd)
            return const Divider(
              height: 18.0,
            );

          final index = i ~/ 2;
          if (index >= _suggestions.length) {
            _suggestions.addAll(generateWordPairs().take(10));
          }
          return ListTile(
            leading: Icon(
              Icons.book,
              color: Colors.blue[700],
              size: 20.0,
            ),
            title: Text(
              _suggestions[index].asPascalCase,
              style: _biggerFont,
            ),
            trailing: Icon(Icons.more_vert),
          );
        });
  }
}
