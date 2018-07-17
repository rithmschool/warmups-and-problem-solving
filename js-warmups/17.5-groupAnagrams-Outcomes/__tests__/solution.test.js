describe("UnitTests", function () {
    it("returns_the_correct_array_of_arrays", function () {
        // Failure message: 
        // This test has no failure messages
        expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
            ["ate", "eat", "tea"],
            ["tan", "tan"],
            ["bat"]
        ])

        expect(groupAnagrams(['tacocat', 'octocat', 'bar', 'blizzard', 'rab', 'bat', 'ball', 'catacot'])).toEqual([
            ['tacocat', 'catacot'],
            ['octocat'],
            ['bar', 'rab'],
            ['blizzard'],
            ['bat'],
            ['ball']
        ])





        expect(groupAnagrams(['tacocat', 'octocat', 'bar', 'blizzard', 'rab', 'bat', 'ball', 'catacot'])).toEqual(

            [['tacocat', 'catacot'],
            ['octocat'],
            ['bar', 'rab'],
            ['blizzard'],
            ['bat'],
            ['ball']])

        expect(groupAnagrams(['tacocat', 'octocat', 'bar', 'blizzard', 'rab', 'bat', 'ball', 'catacot', 'brazzild'])).toEqual([['tacocat', 'catacot'],
        ['octocat'],
        ['bar', 'rab'],
        ['blizzard', 'brazzild'],
        ['bat'],
        ['ball']])



        expect(groupAnagrams(['a', 'b', 'c', 'dd', 'de', 'ed'])).toEqual([['a'], ['b'], ['c'], ['dd'], ['de', 'ed']])


        expect(groupAnagrams([])).toEqual([‘’])


    });
});