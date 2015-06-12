require(['jquery'], function($) {
    $(function() {
        'use strict';
        
        var renumberCriteria = function() {
            var criteria = $('select[name^="fieldnum_"]').parent().parent();
            
            criteria.each(function(i, c) {
                var children = $(c).children().children(),
                    field1,
                    field2;
                field1 = $(children[0]);
                field2 = $(children[1]);
                
                field1.attr('name', 'fieldnum_' + (i+1));
                field1.attr('onchange', 'set_comp(this, this.form.comparator' + (i+1) + ')');
                field2.attr('name', 'comparator' + (i+1));
            });
            
        };
        
        var addCriteria = function(e) {
            e.preventDefault();
            
            var lastCriteria = $('select[name^="fieldnum_"]').parent().parent().last();
            lastCriteria.after(lastCriteria.clone());
            
            renumberCriteria();
        };
        
        var removeCriteria = function(e) {
            e.preventDefault();
            
            $(this).parent().parent().remove();
            
            renumberCriteria();
        };
        
        $('input[name="applyschoolfilter"]').parent().append('<button id="addCriteria" style="margin: 5px; float:right">Add Criteria</button>');
        $('#addCriteria').on('click', addCriteria);
        $('#addCriteria').parent().attr('style', 'background-color: white');
        
        $('input[name="value"]').after('<button class="removeButton" style="margin: 0 5px">X</button>');
        $('fieldset.inline').on('click', '.removeButton', removeCriteria);
        
    });
});
