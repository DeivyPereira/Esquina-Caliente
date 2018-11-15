
function checkMinimalQuantity(id,minimal_quantity)
{
if ($('#'+id).val() < minimal_quantity)
{
 //$('#'+id).css('border', '1px solid red'); eliminar cambio cuadro a color rojo.
 //$('#minimal_quantity_wanted_p').css('color', 'red');
 $('#'+id).val(minimal_quantity);
}
else
{
 $('#'+id).css('border', '1px solid #BDC2C9');
 //$('#minimal_quantity_wanted_p').css('color', '#374853');
}
}
function changeQuantityList(id,minimal_quantity, operator)
{
if (operator == 1) //subtract
$('#'+id).val($('#'+id).val()*1 - 1);
else if (operator == 2) //sum
$('#'+id).val($('#'+id).val()*1 + 1);
checkMinimalQuantity(id,minimal_quantity);
}

function add(delta) { 
	valor = eval(formulario.casilla.value); 
	formulario.casilla.value = eval(valor+delta); 
}