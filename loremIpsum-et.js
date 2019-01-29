var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a ullamcorper velit. Cras ac dapibus leo, ac sagittis erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus elementum faucibus augue, in posuere lectus convallis fermentum. Quisque mauris lectus, mattis non tellus at, ullamcorper malesuada odio. Sed maximus erat nec ipsum finibus, vitae aliquam turpis dictum. Phasellus faucibus lacus in arcu cursus sagittis. Quisque tincidunt porttitor volutpat. Aenean ipsum metus, consequat molestie turpis eu, faucibus euismod nulla. Sed faucibus purus fermentum velit sodales tincidunt. Nulla ac erat dolor. Pellentesque sit amet nulla sed ex finibus ornare vitae vitae tellus.\n\n Nunc sed condimentum orci. Duis ultrices neque egestas porta gravida. Etiam sollicitudin enim sit amet varius imperdiet. Duis et rutrum nisl. Morbi malesuada nisi consectetur tortor suscipit porttitor. Nam risus erat, ullamcorper maximus pharetra posuere, tempus ac est. Suspendisse ut sapien nibh. Nullam eu porttitor nulla. Vivamus tristique eget est vel aliquam. Sed eu mi ex. Pellentesque volutpat ligula ipsum, quis porttitor nibh mollis quis. Nam dignissim varius nisi, ac eleifend nisl egestas eget. Nunc vel mollis nibh, in interdum tortor. Etiam maximus lacus sit amet commodo suscipit. Pellentesque id mauris id magna finibus hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\n Pellentesque commodo mattis mi, sit amet efficitur ipsum porttitor in. Vestibulum eget nibh mattis, aliquet est quis, posuere felis. Phasellus ut mi eu dui iaculis sagittis. Vestibulum blandit dignissim tempus. Sed aliquam, sem mollis ultricies dictum, risus tellus pellentesque libero, in euismod sapien magna et nisi. Fusce gravida, quam vel imperdiet venenatis, nisl ligula dapibus diam, quis faucibus libero odio sed diam. Proin vulputate viverra tellus aliquet ullamcorper.';
//the Easy way
console.log(loremIpsum)

var wordCount = loremIpsum.split(' ');
console.log(wordCount.length);

var etCount = 0;

for (var i = 0; i < wordCount.length; i++) {
  if (wordCount[i] == 'et') {
    etCount++;
  }
}

console.log(etCount);
console.log('\n');

//checking the idea

var str = 'Laura is from Spain and she is in Amsterdam.';

var i = 0; 
var wordCount = 0; 
var is = 0; 

function letter (a) {
  if (a >= 'A' && a <='Z' || a >= 'a' && a <= 'z') {
    return true;
  }
}

while (i < str.length) {
  if (!letter(str[i]) && letter(str[i-1])) {
    if (str[i-3] == ' ' && str[i-2]=='i' && str[i-1] == 's')
    {
      is += 1;
    }
    wordCount += 1;
  }
  i++;
}

console.log(wordCount);
console.log(is);

//solution to problem

var str = loremIpsum;

var i = 0; 
var wordCount = 0; 
var et = 0; 

function letter (a) {
  if (a >= 'A' && a <='Z' || a >= 'a' && a <= 'z') {
    return true;
  }
}

while (i < str.length) {
  if (!letter(str[i]) && letter(str[i-1])) {
    if (str[i-3] == ' ' && str[i-2]=='e' && str[i-1] == 't')
    {
      et += 1;
    }
    wordCount += 1;
  }
  i++;
}

console.log(wordCount);
console.log(et);