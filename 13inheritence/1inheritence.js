const teacher={
    isAvailable:true,
    isTeaching:true,
    isRetired:false
}

const teachingAssintant={
    isProvidingAssintant:true,
    __proto__:teacher
}

Object.setPrototypeOf(teachingAssintant,teacher)