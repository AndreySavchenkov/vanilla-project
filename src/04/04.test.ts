
test.skip('should take old men older then 90', () => {
    const ages = [18,20, 22, 1, 100, 90, 14]

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test.skip('should take courses chipper 160', () => {
    const courses = [
        {title: 'css', price: 110},
        {title: 'js', price: 200},
        {title: 'react', price: 150}
    ]


    const chipCourses = courses.filter(course => course.price < 160);

    expect (chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('css');
    expect(chipCourses[1].title).toBe('react');
})

test.skip('get only compolited tasks', () => {

    const tasks = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Wather', isDone: true},
        {id: 4, title: 'Juice', isDone: false}
    ]

    const complitedTasks = tasks.filter(task => task.isDone)

    expect (complitedTasks.length).toBe(2);
    expect(complitedTasks[0].title).toBe('Bread');
    expect(complitedTasks[1].title).toBe('Wather');
})