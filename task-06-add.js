// Написати програму яка переведе введену оцінку студента до
// болонського формату 89 - 100 це A 75 - 88 це В 60 - 74 це С 45 -
// 59 це D 20 - 44 це Е до 20 це F

let Numb = prompt('Введите оценку в баллах');

if (Numb){
if(!Number.isInteger(Numb*1)){ alert('не число!');}
else { let ball;
    if ((Numb*1 >= 89) && (Numb*1 <= 100))
        {ball = 'A'}
    else {if ((Numb*1 >= 75) && (Numb*1 <= 88))
          {ball = 'B'}
          else {if ((Numb*1 >= 60) && (Numb*1 <= 74))
                {ball = 'C'}
                else {if ((Numb*1 >= 45) && (Numb*1 <= 59))
                    {ball = 'D'}
                    else {if ((Numb*1 >= 20) && (Numb*1 <= 44))
                          {ball = 'E'}
                          else {if (Numb*1 < 20)
                                {ball = 'F'}
                                else {ball = 'недоступна'}
                                }
                         }
                    }
                }
        }
    alert(`Ваша оценка по болонской системе ${ball}`)
    }
} else alert('Отменено пользователем!')