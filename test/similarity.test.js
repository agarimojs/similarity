const { distance, similarity } = require('../src');

describe('distance', () => {
  test('Should return correct levenshtein distance', () => {
    expect(distance('potatoe', 'potatoe')).toEqual(0);
    expect(distance('', '123')).toEqual(3);
    expect(distance('123', '')).toEqual(3);
    expect(distance('a', 'b')).toEqual(1);
    expect(distance('ab', 'ac')).toEqual(1);
    expect(distance('abc', 'axc')).toEqual(1);
    expect(distance('xabxcdxxefxgx', '1ab2cd34ef5g6')).toEqual(6);
    expect(distance('xabxcdxxefxgx', 'abcdefg')).toEqual(6);
    expect(distance('javawasneat', 'scalaisgreat')).toEqual(7);
    expect(distance('example', 'samples')).toEqual(3);
    expect(distance('forward', 'drawrof')).toEqual(6);
    expect(distance('sturgeon', 'urgently')).toEqual(6);
    expect(distance('levenshtein', 'frankenstein')).toEqual(6);
    expect(distance('distance', 'difference')).toEqual(5);
    expect(distance('distance', 'eistancd')).toEqual(2);
    expect(distance('你好世界', '你好')).toEqual(2);
    expect(
      distance('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文')
    ).toEqual(2);
    expect(distance('mikailovitch', 'Mikhaïlovitch')).toEqual(3);
  });
  test('Should return correct levenshtein distance for long texts', () => {
    const text1 =
      'Morbi interdum ultricies neque varius condimentum. Donec volutpat turpis interdum metus ultricies vulputate. Duis ultricies rhoncus sapien, sit amet fermentum risus imperdiet vitae. Ut et lectus';
    const text2 =
      'Duis erat dolor, cursus in tincidunt a, lobortis in odio. Cras magna sem, pharetra et iaculis quis, faucibus quis tellus. Suspendisse dapibus sapien in justo cursus';
    expect(distance(text1, text2)).toEqual(143);
  });
  test('It can use normalize', () => {
    expect(distance('mikailovitch', 'Mikhaïlovitch', true)).toEqual(1);
  });
  test('Should return the length of first string if the second is empty', () => {
    expect(distance('mikailovitch', '')).toEqual(12);
  });
  test('Should return the length of second string if the first is empty', () => {
    expect(distance('', 'mikailovitch')).toEqual(12);
  });
});

describe('similiarty', () => {
  test('Should return correct similarity', () => {
    expect(similarity('potatoe', 'potatoe')).toEqual(1);
    expect(similarity('', '123')).toEqual(0);
    expect(similarity('123', '')).toEqual(0);
    expect(similarity('a', 'b')).toEqual(0);
    expect(similarity('ab', 'ac')).toEqual(0.5);
    expect(similarity('abc', 'axc')).toEqual(0.6666666666666667);
    expect(similarity('xabxcdxxefxgx', '1ab2cd34ef5g6')).toEqual(
      0.5384615384615384
    );
    expect(similarity('xabxcdxxefxgx', 'abcdefg')).toEqual(0.5384615384615384);
    expect(similarity('javawasneat', 'scalaisgreat')).toEqual(
      0.41666666666666663
    );
    expect(similarity('example', 'samples')).toEqual(0.5714285714285714);
    expect(similarity('forward', 'drawrof')).toEqual(0.1428571428571429);
    expect(similarity('sturgeon', 'urgently')).toEqual(0.25);
    expect(similarity('levenshtein', 'frankenstein')).toEqual(0.5);
    expect(similarity('distance', 'difference')).toEqual(0.5);
    expect(similarity('distance', 'eistancd')).toEqual(0.75);
    expect(similarity('你好世界', '你好')).toEqual(0.5);
    expect(
      similarity('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文')
    ).toEqual(0.8571428571428572);
    expect(similarity('mikailovitch', 'Mikhaïlovitch')).toEqual(
      0.7692307692307692
    );
  });
  test('Should return correct similarity for long texts', () => {
    const text1 =
      'Morbi interdum ultricies neque varius condimentum. Donec volutpat turpis interdum metus ultricies vulputate. Duis ultricies rhoncus sapien, sit amet fermentum risus imperdiet vitae. Ut et lectus';
    const text2 =
      'Duis erat dolor, cursus in tincidunt a, lobortis in odio. Cras magna sem, pharetra et iaculis quis, faucibus quis tellus. Suspendisse dapibus sapien in justo cursus';
    expect(similarity(text1, text2)).toEqual(0.2628865979381443);
  });
  test('It can use normalize', () => {
    expect(similarity('mikailovitch', 'Mikhaïlovitch', true)).toEqual(
      0.9230769230769231
    );
  });
  test('Should return 0 if the second is empty', () => {
    expect(similarity('mikailovitch', '')).toEqual(0);
  });
  test('Should return 0 if second string if the first is empty', () => {
    expect(similarity('', 'mikailovitch')).toEqual(0);
  });
});
