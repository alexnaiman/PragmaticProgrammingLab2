# Lab 2. Source revision control
#### Requirement
- Create a revision control repository.
- Create a hello, world project in it.
- The hello, world program will display its revision number as the first thing when executed.
- Write a build script that, during building, embeds the revision number, from the revision control, of the sources used for the build.
- Test the result by producing several version of the hello, world project, build and execute them.
- Analyse issues when using the system with branches and with external projects. Do some tests as well.
- Finally, this is an automatic system that makes the executable contain a reference to the exact version of the sources used for building it. So, the testing team can quickly get the revision number of the executable that was tested, to fill in the bug report (or the test report). Afterwards, the developers can, at any time, checkout the sources used for building that particular version of the product, analyse what could happen, correlate logs or core dumps with the sources, try to reproduce the problem, etc.
