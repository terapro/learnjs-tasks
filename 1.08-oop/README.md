# 1.08 - ООП в функциональном стиле

- [1.08 - ООП в функциональном стиле](#108---%D0%BE%D0%BE%D0%BF-%D0%B2-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC-%D1%81%D1%82%D0%B8%D0%BB%D0%B5)
    - [Внутренний и внешний интерфейс](#%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D0%B8%D0%B9-%D0%B8-%D0%B2%D0%BD%D0%B5%D1%88%D0%BD%D0%B8%D0%B9-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81)
        - [_1.08.01_ Добавить метод и свойство кофеварке](#10801-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-%D0%B8-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%BA%D0%BE%D1%84%D0%B5%D0%B2%D0%B0%D1%80%D0%BA%D0%B5)
    - [Геттеры и сеттеры](#%D0%B3%D0%B5%D1%82%D1%82%D0%B5%D1%80%D1%8B-%D0%B8-%D1%81%D0%B5%D1%82%D1%82%D0%B5%D1%80%D1%8B)
        - [_1.08.02_ Написать объект с геттерами и сеттерами](#10802-%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-%D1%81-%D0%B3%D0%B5%D1%82%D1%82%D0%B5%D1%80%D0%B0%D0%BC%D0%B8-%D0%B8-%D1%81%D0%B5%D1%82%D1%82%D0%B5%D1%80%D0%B0%D0%BC%D0%B8)
        - [_1.08.03_ Добавить геттер для power](#10803-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%B3%D0%B5%D1%82%D1%82%D0%B5%D1%80-%D0%B4%D0%BB%D1%8F-power)
        - [_1.08.04_ Добавить геттер для power](#10804-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%B3%D0%B5%D1%82%D1%82%D0%B5%D1%80-%D0%B4%D0%BB%D1%8F-power)
        - [_1.08.05_ Создать сеттер для onReady](#10805-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D1%81%D0%B5%D1%82%D1%82%D0%B5%D1%80-%D0%B4%D0%BB%D1%8F-onready)
        - [_1.08.06_ Добавить метод isRunning](#10806-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-isrunning)
    - [Функциональное наследование](#%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5-%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
        - [_1.08.07_ Запускать только при включённой кофеварке](#10807-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%D1%82%D1%8C-%D1%82%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D0%BF%D1%80%D0%B8-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D1%91%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BA%D0%BE%D1%84%D0%B5%D0%B2%D0%B0%D1%80%D0%BA%D0%B5)

## Внутренний и внешний интерфейс

### _1.08.01_ Добавить метод и свойство кофеварке

**Link**: http://learn.javascript.ru/internal-external-interface

**Description**: улучшите готовый код кофеварки, который дан ниже: добавьте в кофеварку публичный метод stop(), который будет останавливать кипячение (через clearTimeout).

**Solution**: [1.0.01-coffee-machine.js](1.0.01-coffee-machine.js)

## Геттеры и сеттеры

### _1.08.02_ Написать объект с геттерами и сеттерами

**Link**: http://learn.javascript.ru/getters-setters#%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-%D1%81-%D0%B3%D0%B5%D1%82%D1%82%D0%B5%D1%80%D0%B0%D0%BC%D0%B8-%D0%B8-%D1%81%D0%B5%D1%82%D1%82%D0%B5%D1%80%D0%B0%D0%BC%D0%B8

**Description**: напишите конструктор User для создания объектов

**Solution**: [1.08.02-user.js](1.08.02-user.js)

---

### _1.08.03_ Добавить геттер для power

**Link**: http://learn.javascript.ru/getters-setters#%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%B3%D0%B5%D1%82%D1%82%D0%B5%D1%80-%D0%B4%D0%BB%D1%8F-power

**Description**: Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.

**Solution**: [1.08.03-coffee-machine-getpower.js](1.08.03-coffee-machine-getpower.js)

---

### _1.08.04_ Добавить геттер для power

**Link**: http://learn.javascript.ru/getters-setters#%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-%D0%BA%D0%BE%D1%84%D0%B5%D0%B2%D0%B0%D1%80%D0%BA%D0%B5

**Description**: Добавьте кофеварке публичный метод addWater(amount), который будет добавлять воду.

**Solution**: [1.08.04-add-water.js](1.08.04-add-water.js)

---

### _1.08.05_ Создать сеттер для onReady

**Link**: http://learn.javascript.ru/getters-setters#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D1%81%D0%B5%D1%82%D1%82%D0%B5%D1%80-%D0%B4%D0%BB%D1%8F-onready

**Description**: Создайте сеттер setOnReady, чтобы код снаружи мог назначить свой onReady

**Solution**: [1.08.05-on-ready.js](1.08.05-on-ready.js)

---

### _1.08.06_ Добавить метод isRunning

**Link**: http://learn.javascript.ru/getters-setters#%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-isrunning

**Description**: Из внешнего кода мы хотели бы иметь возможность понять – запущена кофеварка или нет.

**Solution**: [1.08.06-is-running.js](1.08.06-is-running.js)

## Функциональное наследование

### _1.08.07_ Запускать только при включённой кофеварке

**Link**: http://learn.javascript.ru/functional-inheritance#%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%D1%82%D1%8C-%D1%82%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D0%BF%D1%80%D0%B8-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D1%91%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BA%D0%BE%D1%84%D0%B5%D0%B2%D0%B0%D1%80%D0%BA%D0%B5

**Description**: В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.

**Solution**: [1.08.07-coffee-machine-is-turned.js](1.08.07-coffee-machine-is-turned.js)

---
