
OO Relationships Review in Ruby
==============

In this repo, we will be reviewing object relationships in Ruby, specifically the `has_many` `through` relationship (aka: many-to-many).

## Introduction

<img src="http://www.spitzer.caltech.edu/spitzer15/images/NASASelfies_Icon.png?1534553315" alt="NASA Logo" width="400"/>

You've just been hired by NASA to create an app that tracks all of their missions to Mars. The application needs to be aware of the astronauts, the shuttles, and each mission to the Red Planet.

---

## Setup (Code Overview)

Before you begin, first run the following command in your terminal to install the dependencies required for this lab:

```sh
bundle install
```

You can now add all of your Ruby files for your models in the `app/models` folder. You **do not** need to require them. They will be automagically required for you so long as you use the `tools/console.rb` file to run your code.

Through this file, we've provided to you a console that you can use to test your code. To enter a console session, run `ruby tools/console.rb` from the command line. You'll be able to test out the methods that you write here. Take a look at that file to see how you can pre-define variables and create object instances, rather than manually doing it in every single console session.

## Your Job

Your goal is to build out all of the methods listed in the deliverables. Do your best to follow Ruby best practices. For example, use higher-level array methods such as `map`, `select`, and `find` when appropriate in place of `each`.

---

## Deliverables

### Domain Modeling

![Shuttle to Space](https://media.giphy.com/media/RHBHqdYBUmmkw/giphy.gif)

First step is to model the domain you are building out. As a tracking application for all of NASA, `Shuttle`s will have many `Astronaut`s while `Astronaut`s will be selected to ride on many `Shuttle`s. How do they keep track of this? Individual `Mission`s, of course! You cannot join a `Shuttle` without being selected for a `Mission`.

* What are your models?
* What does your schema look like?
* What are the relationships between your models?

---

### Basic Class Attributes and Methods

With your domain modeled, you now need to build out some basic functionality so that NASA HQ can create `Mission`s for both `Shuttle`s and `Astronaut`s. So general searching type functionality.

Questions you should ask yourself:

* Do I need any other attributes?
* Should I write any other methods?
* Am I following *Single Source of Truth*?

![Marvin Martian](https://media.giphy.com/media/5h7nwwMJdNpxoWxmlh/giphy-downsized.gif)

**`SHUTTLE`**

- [ ] `Shuttle#model`
  * returns a `String` that is the model number of the shuttle
- [ ] `Shuttle#capacity`
  * returns a `Fixnum` that is the total number of astronauts that the shuttle can host
- [ ] `Shuttle#add_astronaut`
  * takes in an argument of an `Astronaut` instance and a launch date, and adds them to this shuttle's list of astronauts as long _as it doesn't exceed the shuttle's capacity_.
- [ ] `Shuttle#current_astronauts`
  * returns an `Array` of all the astronauts on this shuttle
- [ ] `Shuttle.all`
  * returns an `Array` of all of NASA's currently running shuttles
- [ ] `Shuttle.find_by_model`
  * takes a `String` argument of a model number and returns a `Shuttle` instance that matches that argument

**`ASTRONAUT`**

- [ ] `Astronaut#name`
  * returns a `String` that is the astronaut's name
- [ ] `Astronaut#age`
  * returns a `Fixnum` that is the age of the astronaut
- [ ] `Astronaut#specialty`
  * returns a `String` that is the astronaut's focus of study on Mars
- [ ] `Astronaut#shuttles`
  * returns an `Array` of this astronaut's shuttles
- [ ] `Astronaut#join_shuttle`
  * takes in an argument of a `Shuttle` instance and a launch date, and adds this astronaut to the shuttle's list of astronauts _if it doesn't exceed that shuttle's capacity_. If the shuttle is already full, print the following message: `This shuttle is at capacity!`.
- [ ] `Astronaut.all`
  * returns an `Array` of all the astronauts
- [ ] `Astronaut.most_missions`
  * returns an instance of an astronaut who has been to Mars the most times

**`MISSION`**

- [ ] `Mission#launch_date`
  * returns a `Fixnum` that is the launch year of this mission to Mars.
- [ ] `Mission.all`
  * returns an `Array` of all the missions

---

### Advanced Methods - Analytics!

Our tracking application has some basic functionality. Let's first make a commit!

```
git add .
git commit -m "can create shuttles astronauts and missions"
git push
```

![Astronaut Cartoon](https://media.giphy.com/media/xT8qBhrlNooHBYR9f2/giphy.gif)

Now we want to build out some useful features so `Shuttle`s and `Astronaut`s can get more value out of our app.

**`SHUTTLE`**

* `Shuttle#average_age`
  * returns a `Float` that is the average age of this shuttle's astronauts
* `Shuttle#astronauts_specialties`
  * prints out all of the specialties for this shuttle's astronauts
* `Shuttle.smallest_mission`
  * returns the `Shuttle` instance which has the least number of astronauts
* `Shuttle.most_common_model`
  * returns a `String` that is the most popular model number

**`ASTRONAUT`**

* `Astronaut.top_three`
  * returns an `Array` of astronauts; they are the three most active astronauts

**`MISSION`**

* `Mission.first_launch`
  * returns the `Astronaut` instances for the astronauts that were selected for the first mission to Mars

---

### BONUS!

![Shuttle Cartoon](https://media.giphy.com/media/l4FGC3dPGy2VJJsIw/giphy-downsized.gif)

Our platform is done! Let's commit our code again!

Now NASA wants to release this app so that their astronauts can use it to see their fellow shuttle members in advance of a mission. See if you can implement this method.

* `Astronaut#fellow_mission_members`
  * returns a unique `Array` of astronauts who have been on the same shuttle as you

A highly requested feature is to restrict ages for astronauts-- they need to be at least 25. See if you can implement this functionality.

* `Shuttle#minimum_age`
  * returns a `Fixnum` that is the minimum age required for astronauts
* Edit `Shuttle#add_astronaut`
  * takes in an argument of an `Astronaut` instance and adds them to this shuttle's list of astronauts
  * NOW this should function so that if the given `Astronaut` instance is not of age:
    * do not let them join the mission
    * print out a friendly message informing them that they are too young
    * don't forget that an astronaut cannot join a shuttle that is at capacity
* Edit `Astronaut#join_shuttle`
  * takes in an argument of a `Shuttle` instance and adds this astronaut to the shuttle's list of astronauts
  * NOW this should function so that if you don't meet the minimum age requirement of the given `Shuttle` instance:
    * do not let them join the mission
    * print out a friendly message informing them that they are too young
    * don't forget that an astronaut cannot join a shuttle that is at capacity

Congrats on finishing NASA's mission tracking app for Mars. Let's jump on a shuttle and make the first step towards exploring our solar system.

![Mars Overview](https://media.giphy.com/media/3oriNWIJQ1EK6GQ9gY/giphy-downsized.gif)
