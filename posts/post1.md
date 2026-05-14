---
layout: posts.layout.html
title: How I got into Compiler Development

date: 2026-05-14
tags:
  - posts
---

Best enjoyed with _[Holiday by Green Day](https://youtu.be/A1OqtIqzScI)_

Hello World, my main personal project as of now is a glued together custom programming language compiler, implemented in C (and some C++), it's called SCULL (Scalable, Compiled, Unambiguous Low-level Language), and let me tell you, it is NONE of that (yet _wink wink_), it's not the best code in the world, but atleast I wrote it. My only goal with this project is to learn compilers (very huge field in itself btw), and aside from that, even if I don't end up being the next Chris Lattner or the next Dennis Ritchie (which I definitely wont lmao), this project surely has taught me a lot of things about programming and creating software in general. Can you believe that before this project I didn't know we could have function pointers in C?

It began in the start of my second year in Diploma (as of now I will be starting my 3rd and final year soon, making the project accurately 1 year old when I'm writing this) and I had started using the C language extensively while programming, such as making some `coreutil` command implementations, I found low level development with C fascinating at this point, since you could make something so huge with such a small and simple language - I would prove the "simple" point wrong later. I was familiar with linux since a couple years, and after learning some C I also tried to look into linux kernel development, but it was too much for me (such a huge codebase bro wtf how r u supposed to get around), and I didnt have much of an aim in what I really wanted to do.

One day while scrolling on YouTube, I found this video - [How to Build a Compiler from Scratch](https://youtu.be/HOe2YFnzO2I) by Alex The Dev. I decided to follow along this tutorial, although I am not a huge fan of tutorial videos. In the almost 4-hour long video, I was walked through each stage of any generic compiler's pipeline, told what it does, and how it is implemented. I knew nothing about compilers and this seemed large, but simple enough to explore and mess around with. It took me about 2-4 days to finish, and when I did, naturally I was urged to add more features to the very bland almost assembly-like language.

```
int n

n = 1
a = input

:label
output n
n = n * 2

if n <= a then goto :label
```

The basic structure until now was this:

> Text -> Tokens -> AST -> Check semantics -> Spit out raw FASM assembly

One of the first features that I added was the character type, and then I later ventured into things like loops, functions, preprocessor include statements, `if-else if-else` statements, arrays, etc.

It used to emit [FASM](https://flatassembler.net/) assembly, which is basically an Intel-style assembly for x86 CPUs (fun fact, the assembler is bootstrapped). Implementing these new features in another language which I was very new to was surely a challenge which I enjoyed a lot, but it was getting very messy and time consuming to create new features, thus I switched the backend to [LLVM](https://llvm.org) about 6 months in. This again was a great learning challenge as I was NOT able to figure out many things initially, for instance I once spent about 3 days figuring out why LLVM wasn't able to optimize any generated IR even though I was correctly calling all functions, later on I found out that the `optimize()` function was being called after the `emit()` function.

This project taught me a lot about manual memory management (and how I'd like to avoid it at all time), ownership in C structs (crazy how we only hear rust people talk about this term), using debuggers such as `valgrind` and `lldb`, structuring code and good programming practices (but i still suck lol), using C++ with C, using `make` and `cmake`, and many more.

Today, the project has reached ~5000 lines of code, and the language looks like this:

```
-include "io.scl"

fn main() : i32 {
  i32 n

  printf("Enter a number: ")
  scanf("%d", &n)

  i32 result = 1

  while n > 1 {
    result = result * n
    n = n - 1
  }

  printf("Factorial: %d\n", result)

  return 0
}
```

I know its such a bum ass example, but man I actually suck at writing a language that I created.

It links to the C standard library to use functions such as `printf` and `scanf`, which kept me from implementing those in assembly itself.

Its still using a recursive descent parser, but I'd like to add pratt parsing for expressions though, as I recently explored pratt parsing in this [other side-project of mine](https://github.com/smyk07/crepl).

I still have no clue where this project will end up, but right now it's going strong, I'm actively learning new things about compilers and writing code in general every day, and thats all that matters to me.

This project is yet very far from complete (I don't think it will ever be completed, as there can never be a perfect programming language). My current goals are to have a language which cleanly integrates with C (not zig eww), and is not as hard as C++ to write lol, although I am trying to better my C++ skills to write cleaner and better C++ in the SCULL Compiler.

Unfortunately I am also discovering new bugs with every new feature that I add, but I think it's a very good learning experience for me, even while bugs in C are sometimes very frustrating to fix.

To end this already long blog, I would like to thank every online friend for helping me with this project and answering my questions, and my mom for listening to me aimlessly yap about SCULL (her final year project was also apparently a compiler, but she forgot everything about it).

Happy birthday SCULL.

<img src="/assets/scull_1bday.png" alt="SCULL's 1st Birthday" width="350">

Thanks for reading this post.

~ Samyak
